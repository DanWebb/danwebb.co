import React from 'react';
import {string} from 'prop-types';
import InlineDot from '../../logo/inline-dot';
import Container from './container';
import Category from './category';
import Title from './title';
import CreatedAt from './created-at';

const MainTitle = ({category, title, createdAt, medium}) => (
	<Container>
		<Category category={category} to={`/journal/${category}`}>{category}</Category>
		<Title>{title}<InlineDot/></Title>
		<CreatedAt>
			{createdAt} &bull; {' '}
			{medium && <a href={medium} target="_blank" rel="noreferrer noopener">Read on medium</a>}
		</CreatedAt>
	</Container>
);

MainTitle.propTypes = {
	category: string.isRequired,
	title: string.isRequired,
	createdAt: string.isRequired,
	medium: string
};

MainTitle.defaultProps = {
	medium: ''
};

export default MainTitle;
