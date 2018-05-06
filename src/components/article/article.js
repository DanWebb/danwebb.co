import React from 'react';
import {string} from 'prop-types';
import {imageType} from '../../types';
import Container from './container';
import Category from './category';
import Title from './title';
import Description from './description';
import CreatedAt from './created-at';
import Content from './content';
import Image from './image';

const Article = ({category, title, description, date, handle, image}) => (
	<Container>
		<Content to={`/journal/${handle}`}>
			<Category category={category}>{category}</Category>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<CreatedAt>{date}</CreatedAt>
		</Content>

		{image.src && (
			<Image to={`/journal/${handle}`} {...image}/>
		)}
	</Container>
);

Article.propTypes = {
	category: string.isRequired,
	title: string.isRequired,
	description: string.isRequired,
	date: string.isRequired,
	handle: string.isRequired,
	image: imageType
};

Article.defaultProps = {
	image: {}
};

export default Article;
