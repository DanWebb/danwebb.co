import React from 'react';
import {string, shape, array, bool} from 'prop-types';
import {colorType} from '../../types';
import Section from './section';
import BackgroundBox from './background-box';
import Wrap from './wrap';
import MacWindow from './mac-window/mac-window';
import ContentBox from './content-box/content-box';

const Project = ({image, mobileImage, background, description, right}) => (
	<Section>
		<BackgroundBox color={background} right={right}/>
		<Wrap>
			<ContentBox background={background} {...description} right={right}/>
			<MacWindow image={image} mobileImage={mobileImage} alt={description.title} right={right}/>
		</Wrap>
	</Section>
);

Project.propTypes = {
	image: string.isRequired,
	mobileImage: string,
	background: colorType,
	description: shape({
		title: string.isRequired,
		spec: string.isRequired,
		content: string.isRequired,
		visit: string,
		caseStudy: string,
		tools: array
	}).isRequired,
	right: bool
};

Project.defaultProps = {
	background: 'ice',
	mobileImage: '',
	right: false
};

export default Project;
