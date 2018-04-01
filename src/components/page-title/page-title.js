import React from 'react';
import {node} from 'prop-types';
import Container from './container';
import Title from './title';
import Dot from './dot';

const PageTitle = ({children}) => (
	<Container>
		<Title>{children}<Dot/></Title>
	</Container>
);

PageTitle.propTypes = {
	children: node.isRequired
};

export default PageTitle;
