import React from 'react';
import {Link} from 'react-static';
import Circle from '../logo/circle';
import Bar from './bar';

const TopBar = () => (
	<Bar>
		<Link to="/"><Circle/></Link>
	</Bar>
);

export default TopBar;
