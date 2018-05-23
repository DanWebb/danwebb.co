import React from 'react';
import {object, array} from 'prop-types';
import {withRouteData, Head} from 'react-static';
import convert from 'htmr';
import Layout from '../components/layout/layout';
import MainTitle from '../components/article/main-title/main-title';
import Content from '../components/article/content';
import Details from '../components/article/details/details';
import Related from '../components/article/related/related';
import FullWidthImage from '../components/elements/full-width-image';
import FullWidthDivider from '../components/elements/full-width-divider';
import Text from '../components/elements/text';

const Article = ({article, articles}) => (
	<Layout>
		<Head>
			<meta name="title" content={article.title}/>
			<meta name="description" content={article.description}/>
			<meta itemProp="name" content={article.title}/>
			<meta itemProp="url" content={`https://danwebb.co/journal/${article.handle}`}/>
			{article.featuredImage && <meta itemProp="image" content={`https://danwebb.co${article.featuredImage.src}`}/>}
			{article.image && <meta itemProp="thumbnailUrl" content={`https://danwebb.co${article.image.src}`}/>}
			{article.image && <link rel="image_src" href={`https://danwebb.co${article.image.src}`}/>}
			<meta name="twitter:title" content={article.title}/>
			{article.image && <meta name="twitter:image:src" content={`https://danwebb.co${article.image.src}`}/>}
			<meta property="og:title" content={article.title}/>
			<meta property="og:description" content={article.description}/>
			{article.image && <meta property="og:image" content={`https://danwebb.co${article.image.src}`}/>}
			<meta property="og:type" content="article"/>
			<meta property="og:url" content={`https://danwebb.co/journal/${article.handle}`}/>
		</Head>

		<MainTitle category={article.category} title={article.title} createdAt={article.date} medium={article.medium}/>

		{article.featuredImage ? <FullWidthImage {...article.featuredImage}/> : <FullWidthDivider/>}

		<Content>
			<Text>{convert(article.contents)}</Text>
			<Details title={article.title} handle={article.handle}/>
			{article.related && (
				<Related articles={articles.filter(a => article.related.indexOf(a.handle) > -1)}/>
			)}
		</Content>
	</Layout>
);

Article.propTypes = {
	article: object.isRequired,
	articles: array.isRequired
};

export default withRouteData(Article);
