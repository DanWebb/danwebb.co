import React from 'react';
import {object} from 'prop-types';
import {withRouteData} from 'react-static';
import convert from 'htmr';
import Layout from '../components/layout/layout';
import MainTitle from '../components/article/main-title/main-title';
import Text from '../components/elements/text';

const Article = ({article}) => (
	<Layout>
		<MainTitle category={article.category} title={article.title} createdAt={article.date}/>
		<Text>{convert(article.contents)}</Text>
	</Layout>
);

Article.propTypes = {
	article: object.isRequired
};

export default withRouteData(Article);
