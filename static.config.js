import Document from './src/components/document/document';
import renderToHtml from './src/modules/render-styles';

const getSiteData = () => ({title: 'Dan Webb'});

const getRoutes = () => [{
	path: '/',
	component: 'src/pages/home'
}, {
	is404: true,
	component: 'src/pages/not-found'
}];

export default {
	getSiteData,
	getRoutes,
	renderToHtml,
	Document
};
