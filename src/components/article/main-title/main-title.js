import React from 'react';
import {string} from 'prop-types';
import InlineDot from '../../logo/inline-dot';
import Container from './container';
import Category from './category';
import Title from './title';
import CreatedAt from './created-at';

const MainTitle = ({category, title, createdAt}) => (
	<Container>
		<Category category={category} to={`/journal/${category}`}>{category}</Category>
		<Title>{title}<InlineDot/></Title>
		<CreatedAt>{createdAt}</CreatedAt>
	</Container>
);

MainTitle.propTypes = {
	category: string.isRequired,
	title: string.isRequired,
	createdAt: string.isRequired
};

export default MainTitle;
