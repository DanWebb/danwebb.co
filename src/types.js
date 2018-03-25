import {string, number, oneOf, shape} from 'prop-types';
import color from './theme/color';
import font from './theme/font';

const colorType = oneOf(Object.keys(color));
const fontType = oneOf(font.weights);

const imageType = shape({
	src: string,
	alt: string,
	width: number,
	height: number
});

export {
	colorType,
	fontType,
	imageType
};
