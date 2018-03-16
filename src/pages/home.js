import React from 'react';
import {string} from 'prop-types';
import {withSiteData} from 'react-static';

const Home = ({title}) => (
	<div>
		<h1>{title}</h1>
	</div>
);

Home.propTypes = {
	title: string
};

Home.defaultProps = {
	title: ''
};

export default withSiteData(Home);
