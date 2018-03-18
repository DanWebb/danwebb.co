import {oneOf} from 'prop-types';
import color from './theme/color';
import font from './theme/font';

const colorType = oneOf(Object.keys(color));
const fontType = oneOf(font.weights);

export {
	colorType,
	fontType
};
