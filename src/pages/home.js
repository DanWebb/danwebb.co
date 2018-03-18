import React from 'react';
import {string} from 'prop-types';
import {withSiteData} from 'react-static';
import Layout from '../components/layout/layout';

const Home = ({title}) => (
	<Layout>
		<h1>{title}</h1>
	</Layout>
);

Home.propTypes = {
	title: string
};

Home.defaultProps = {
	title: ''
};

export default withSiteData(Home);
