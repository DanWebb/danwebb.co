import jdown from 'jdown';
import Document from './src/components/document/document';
import renderToHtml from './src/modules/render-styles';

const getSiteData = () => ({title: 'Dan Webb'});

const getRoutes = async () => {
	const content = await jdown('src/content');
	return [{
		path: '/',
		component: 'src/pages/home',
		getData: () => ({projects: content.projects, testimonials: content.testimonials})
	}, {
		path: '/pages',
		component: 'src/pages/not-found',
		children: content.pages.map(page => ({
			path: page.handle,
			component: 'src/pages/page',
			getData: () => ({page})
		}))
	}, {
		is404: true,
		component: 'src/pages/not-found'
	}];
};

export default {
	getSiteData,
	getRoutes,
	renderToHtml,
	Document
};
