import styled from 'styled-components';
import {colorType, fontType} from '../../types';
import color from '../../theme/color';
import font from '../../theme/font';

const Span = styled.span`
	color: ${props => color[props.color]};
	font-weight: ${props => font[props.weight]};
`;

Span.propTypes = {
	color: colorType,
	weight: fontType
};

Span.defaultProps = {
	color: color.black,
	font: font.regular
};

export default Span;
