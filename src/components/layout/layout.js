import React from 'react';
import {node} from 'prop-types';
import TopBar from '../top-bar/top-bar';
import Cta from '../cta/cta';
import Footer from '../footer/footer';

const Layout = ({children}) => (
	<main>
		<TopBar/>
		{children}
		<Cta/>
		<Footer/>
	</main>
);

Layout.propTypes = {
	children: node.isRequired
};

export default Layout;
