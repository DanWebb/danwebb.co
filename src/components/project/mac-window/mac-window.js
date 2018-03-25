import React from 'react';
import {string, bool} from 'prop-types';
import Box from './box';
import Bar from './bar';
import Image from './image';

const MacWindow = ({image, mobileImage, alt, right}) => (
	<Box right={right}>
		<Bar/>
		<Image src={mobileImage || image} srcSet={`${mobileImage || image} 600w, ${image} 1500w`} alt={alt}/>
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
