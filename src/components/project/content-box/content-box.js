import React from 'react';
import {array, string, bool} from 'prop-types';
import {colorType} from '../../../types';
import Divider from '../../divider/divider';
import Button from '../../button/button';
import Tools from './tools/tools';
import Box from './box';
import Title from './title';
import Spec from './spec';
import Content from './content';
import Buttons from './buttons';

const ContentBox = ({color, title, spec, summary, visit, caseStudy, tools, right}) => (
	<Box background={color} right={right}>
		<Divider color="red" width="60px" centered={false}/>
		<Title>{title}</Title>
		<Spec>{spec}</Spec>
		<Content>{summary}</Content>

		{(visit || caseStudy) && (
			<Buttons>
				{visit && <Button href={visit} secondary small>Visit</Button>}
				{caseStudy && <Button href={caseStudy} small>Read case study</Button>}
			</Buttons>
		)}

		{tools.length > 0 && <Tools tools={tools}/>}
	</Box>
);

ContentBox.propTypes = {
	color: colorType.isRequired,
	title: string.isRequired,
	spec: string.isRequired,
	summary: string.isRequired,
	visit: string,
	caseStudy: string,
	tools: array,
	right: bool
};

ContentBox.defaultProps = {
	visit: '',
	caseStudy: '',
	tools: [],
	right: false
};

export default ContentBox;
