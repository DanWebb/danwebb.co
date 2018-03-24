import React from 'react';
import {array} from 'prop-types';
import Container from './container';
import Title from './title';
import Toolbelt from './toolbelt';
import Tool from './tool';

const Tools = ({tools}) => (
	<Container>
		<Title>Built With:</Title>
		<Toolbelt>
			{tools.map(tool => <Tool key={tool.name} {...tool}/>)}
		</Toolbelt>
	</Container>
);

Tools.propTypes = {
	tools: array.isRequired
};

export default Tools;
