import React from 'react';
import {string, bool} from 'prop-types';
import {breakpoints} from '../../../theme/breakpoint';
import Box from './box';
import Bar from './bar';
import Image from './image';

const MacWindow = ({image, mobileImage, alt, right}) => (
	<Box right={right}>
		<Bar/>
		<picture>
			<source media={`(min-width: ${breakpoints.medium}px)`} srcSet={image}/>
			<Image src={mobileImage || image} alt={alt}/>
		</picture>
	</Box>
);

MacWindow.propTypes = {
	image: string.isRequired,
	mobileImage: string,
	alt: string.isRequired,
	right: bool
};

MacWindow.defaultProps = {
	mobileImage: '',
	right: false
};

export default MacWindow;
