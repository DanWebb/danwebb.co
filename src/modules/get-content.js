import metalsmith from 'metalsmith';
import markdown from 'metalsmith-markdown';
import camelCase from 'camelcase';

const transformFileContents = (files, file) => {
	files[file].contents = files[file].contents.toString('utf8');
};

const transformFileNames = (files, file) => {
	const parts = file.split('/');
	let fileName = camelCase(parts.pop().replace('.html', ''));

	if (parts[0]) {
		fileName = `${parts.join('/')}/${fileName}`;
	}

	files[fileName] = files[file];
	delete files[file];
	return fileName;
};

const addToCollection = (files, file) => {
	const parts = file.split('/');

	if (parts[0] !== 'collections' || !parts[1] || !parts[2]) {
		return false;
	}

	if (!files[parts[1]]) {
		files[parts[1]] = [];
	}

	files[parts[1]].push(files[file]);
	delete files[file];
	return true;
};

const addToGroup = (files, file) => {
	const parts = file.split('/');

	if (!parts[1] || parts[2]) {
		return false;
	}

	if (!files[parts[0]]) {
		files[parts[0]] = {};
	}

	files[parts[0]][parts[1]] = files[file];
	delete files[file];
	return true;
};

const transform = () => (files, metalsmith, done) => {
	Object.keys(files).forEach(file => {
		transformFileContents(files, file);
		file = transformFileNames(files, file);

		const isCollection = addToCollection(files, file);

		if (!isCollection) {
			addToGroup(files, file);
		}
	});

	done();
};

const getContent = () => new Promise((resolve, reject) => {
	metalsmith(__dirname)
		.source('../content')
		.use(markdown())
		.use(transform())
		.process((err, files) => {
			if (err) {
				return reject(err);
			}

			return resolve(files);
		});
});

export default getContent;
