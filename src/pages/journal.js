import React from 'react';
import {shape, string, array} from 'prop-types';
import {withRouteData} from 'react-static';
import {colorType, imageType} from '../types';
import Layout from '../components/layout/layout';
import SidebarLayout from '../components/layout/sidebar-layout';
import Banner from '../components/banner/banner';
import Newsletter from '../components/newsletter/newsletter';
import CategoryList from '../components/category-list/category-list';

const Journal = ({intro, categories}) => (
	<Layout>
		<Banner
			color={intro.color}
			title={intro.title}
			text={intro.description}
			image={intro.image}
		/>
		<SidebarLayout>
			<div/>
			<aside>
				<Newsletter dark title/>
				<CategoryList categories={categories}/>
			</aside>
		</SidebarLayout>
	</Layout>
);

Journal.propTypes = {
	intro: shape({
		color: colorType.isRequired,
		title: string.isRequired,
		description: string,
		image: imageType
	}).isRequired,
	categories: array.isRequired
};

export default withRouteData(Journal);
