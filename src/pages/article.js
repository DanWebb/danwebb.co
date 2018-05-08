import React from 'react';
import {object} from 'prop-types';
import {withRouteData} from 'react-static';
import convert from 'htmr';
import Layout from '../components/layout/layout';
import MainTitle from '../components/article/main-title/main-title';
import Text from '../components/elements/text';
import FullWidthImage from '../components/elements/full-width-image';
import FullWidthDivider from '../components/elements/full-width-divider';

const Article = ({article}) => (
	<Layout>
		<MainTitle category={article.category} title={article.title} createdAt={article.date}/>
		{article.featuredImage ? <FullWidthImage {...article.featuredImage}/> : <FullWidthDivider/>}
		<Text>{convert(article.contents)}</Text>
	</Layout>
);

Article.propTypes = {
	article: object.isRequired
};

export default withRouteData(Article);
