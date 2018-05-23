import React from 'react';
import {string} from 'prop-types';
import {colorType, imageType} from '../../types';
import Section from './section';
import Content from './content';
import Title from './title';
import Text from './text';
import Circle from './circle';
import Image from './image';

const Banner = ({color, title, text, image}) => (
	<Section color={color}>
		<Content>
			<Circle color={color === 'red' ? 'white' : color}/>
			{title && <Title>{title}</Title>}
			{text && <Text>{text}</Text>}
		</Content>
		{image && <Image {...image}/>}
	</Section>
);

Banner.propTypes = {
	color: colorType,
	title: string,
	text: string,
	image: imageType
};

Banner.defaultProps = {
	color: 'red',
	title: '',
	text: '',
	image: {}
};

export default Banner;
