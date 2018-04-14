import React from 'react';
import {array} from 'prop-types';
import {withRouteData} from 'react-static';
import convert from 'htmr';
import Layout from '../components/layout/layout';
import Introduction from '../components/introduction/introduction';
import Project from '../components/project/project';
import Testimonial from '../components/testimonial/testimonial';
import Services from '../components/services/services';
import About from '../components/about/about';

const Home = ({projects, testimonials}) => (
	<Layout>
		<Introduction/>
		<Project {...projects[0]}/>
		<Testimonial {...testimonials[0]}>
			{convert(testimonials[0].contents)}
		</Testimonial>
		<Project {...projects[1]} right/>
		<Testimonial {...testimonials[1]}>
			{convert(testimonials[1].contents)}
		</Testimonial>
		<Services/>
		<About/>
	</Layout>
);

Home.propTypes = {
	projects: array.isRequired,
	testimonials: array.isRequired
};

export default withRouteData(Home);
