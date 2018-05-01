import React from 'react';
import {Link} from 'react-static';
import Circle from '../logo/circle';
import {InternalLink} from '../elements/a';
import Bar from './bar';
import Nav from './nav';

const TopBar = () => (
	<Bar>
		<Link to="/"><Circle/></Link>
		<Nav>
			<InternalLink to="/journal" color="white">Journal</InternalLink>
		</Nav>
	</Bar>
);

export default TopBar;
