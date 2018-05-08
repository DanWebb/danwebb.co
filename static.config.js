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
		path: '/journal',
		component: 'src/pages/journal',
		getData: () => ({
			intro: {
				color: 'red',
				title: 'HI THERE - I’M DAN',
				description: 'This is where I write about being a freelance web developer, making great things and exploring ideas, places, stories and thoughts.',
				image: {src: '/journal-banner.jpg', width: 1164, height: 844, alt: 'danwebb journal adventure'}
			},
			categories: content.categories.filter(c => c.title !== 'All'),
			articles: content.journal
		}),
		children: content.categories.filter(c => c.title !== 'All').map(category => ({
			path: category.handle,
			component: 'src/pages/journal',
			getData: () => ({
				intro: category,
				categories: content.categories.filter(c => c.handle !== category.handle),
				articles: content.journal.filter(article => article.category === category.handle)
			})
		})).concat(content.journal.map(article => ({
			path: article.handle,
			component: 'src/pages/article',
			getData: () => ({article})
		})))
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
