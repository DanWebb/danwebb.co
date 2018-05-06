import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import {colorType} from '../../types';
import H4 from '../elements/h4';
import Category from './category';

const CategoryList = ({categories}) => (
	<div>
		<H4>Categories</H4>

		{categories.map(category => (
			<Category key={category.title} color={category.color} to={`/journal/${category.handle}`}>
				<h5>{category.title}</h5>
				<p>{category.description}</p>
			</Category>
		))}
	</div>
);

CategoryList.propTypes = {
	categories: arrayOf(shape({
		color: colorType.isRequired,
		title: string.isRequired,
		description: string.isRequired,
		handle: string.isRequired
	})).isRequired
};

export default CategoryList;
