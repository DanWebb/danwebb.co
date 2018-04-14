import React from 'react';
import {string, array, bool} from 'prop-types';
import {colorType} from '../../types';
import Section from './section';
import BackgroundBox from './background-box';
import Wrap from './wrap';
import MacWindow from './mac-window/mac-window';
import ContentBox from './content-box/content-box';

const Project = props => (
	<Section>
		<BackgroundBox color={props.color} right={props.right}/>
		<Wrap>
			<MacWindow image={props.image} mobileImage={props.mobileImage} alt={props.title} right={props.right}/>
			<ContentBox {...props}/>
		</Wrap>
	</Section>
);

Project.propTypes = {
	image: string.isRequired,
	mobileImage: string,
	color: colorType,
	title: string.isRequired,
	spec: string.isRequired,
	summary: string.isRequired,
	visit: string.isRequired,
	tools: array,
	hasCaseStudy: bool,
	right: bool
};

Project.defaultProps = {
	color: 'ice',
	mobileImage: '',
	tools: [],
	hasCaseStudy: false,
	right: false
};

export default Project;
