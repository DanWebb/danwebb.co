import React from 'react';
import {withRouteData} from 'react-static';
import Layout from '../components/layout/layout';
import SidebarLayout from '../components/layout/sidebar-layout';
import Banner from '../components/banner/banner';
import Newsletter from '../components/newsletter/newsletter';

const Journal = () => (
	<Layout>
		<Banner
			color="red"
			title="HI THERE - I’M DAN"
			text="This is where I write about being a freelance web developer, making great things and exploring ideas, places, stories and thoughts."
			image={{src: '/journal-banner.jpg', width: 1164, height: 844, alt: 'danwebb journal adventure'}}
		/>
		<SidebarLayout>
			<div/>
			<aside>
				<Newsletter dark title/>
				<h3>Categories</h3>
			</aside>
		</SidebarLayout>
	</Layout>
);

export default withRouteData(Journal);
