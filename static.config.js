import {reloadRoutes} from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';
import Document from './src/components/document/document';
import renderToHtml from './src/modules/render-styles';
import renderer from './src/modules/markdown-renderer';

chokidar.watch('src/content').on('all', () => reloadRoutes());

const getRoutes = async () => {
	const content = await jdown('src/content', {renderer});
	const articles = content.journal.sort((a, b) => new Date(b.date) > new Date(a.date));
	return [{
		path: '/',
		component: 'src/pages/home',
		getData: () => ({
			projects: content.projects,
			testimonials: content.testimonials,
			latestArticles: articles.slice(0, 2)
		})
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
			articles
		}),
		children: content.categories.filter(c => c.title !== 'All').map(category => ({
			path: category.handle,
			component: 'src/pages/journal',
			getData: () => ({
				intro: category,
				categories: content.categories.filter(c => c.handle !== category.handle),
				articles: articles.filter(article => article.category === category.handle)
			})
		})).concat(articles.map(article => ({
			path: article.handle,
			component: 'src/pages/article',
			getData: () => ({article, articles})
		})))
	}, {
		is404: true,
		component: 'src/pages/not-found'
	}];
};

export default {
	siteRoot: 'https://danwebb.co',
	getRoutes,
	renderToHtml,
	Document
};
