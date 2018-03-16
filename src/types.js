import {oneOf} from 'prop-types';
import {color} from './theme/theme';

const colorType = oneOf(Object.keys(color));

export {
	colorType
};
