import React from 'react';
import {node, string} from 'prop-types';
import TopBar from '../top-bar/top-bar';
import Cta from '../cta/cta';
import Footer from '../footer/footer';
import Meta from './meta';

const Layout = ({title, children}) => (
	<main>
		<Meta title={title}/>
		<TopBar/>
		{children}
		<Cta/>
		<Footer/>
	</main>
);

Layout.propTypes = {
	children: node.isRequired,
	title: string
};

Layout.defaultProps = {
	title: ''
};

export default Layout;
