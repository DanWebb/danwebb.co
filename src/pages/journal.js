import React from 'react';
import {withRouteData} from 'react-static';
import Layout from '../components/layout/layout';
import Banner from '../components/banner/banner';

const Journal = () => (
	<Layout>
		<Banner
			color="red"
			title="HI THERE - I’M DAN"
			text="This is where I write about being a freelance web developer, making great things and exploring ideas, places, stories and thoughts."
		/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	</Layout>
);

export default withRouteData(Journal);
