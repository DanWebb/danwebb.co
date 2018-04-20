import {reloadRoutes} from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';
import Document from './src/components/document/document';
import renderToHtml from './src/modules/render-styles';

chokidar.watch('src/content').on('all', () => reloadRoutes());

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
	getRoutes,
	renderToHtml,
	Document
};
