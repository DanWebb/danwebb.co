import React from 'react';
import {string, bool} from 'prop-types';
import Box from './box';
import Title from './title';
import Description from './description';

const Tooltip = ({title, description, showTip}) => (
	<Box showTip={showTip}>
		<Title>{title}</Title>
		<Description>{description}</Description>
	</Box>
);

Tooltip.propTypes = {
	title: string.isRequired,
	description: string.isRequired,
	showTip: bool
};

Tooltip.defaultProps = {
	showTip: false
};

export default Tooltip;
