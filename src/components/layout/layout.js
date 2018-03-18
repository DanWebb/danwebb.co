import React from 'react';
import {node} from 'prop-types';
import TopBar from '../top-bar/top-bar';

const Layout = ({children}) => (
	<main>
		<TopBar/>
		{children}
	</main>
);

Layout.propTypes = {
	children: node.isRequired
};

export default Layout;
