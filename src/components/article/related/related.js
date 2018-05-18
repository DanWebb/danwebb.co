import React from 'react';
import {array} from 'prop-types';
import Article from '../article';
import Title from './title';

const Related = ({articles}) => (
	<div>
		<Title>Up Next</Title>
		{articles.map(article => <Article key={article.handle} {...article}/>)}
	</div>
);

Related.propTypes = {
	articles: array.isRequired
};

export default Related;
