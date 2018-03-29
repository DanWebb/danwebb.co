import styled from 'styled-components';
import {shape, string} from 'prop-types';
import {colorType, fontType} from '../../types';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Span = styled.span`
	color: ${props => color[props.color]};
	font-weight: ${props => font[props.weight]};
	font-size: ${props => props.size.small};

	${props => breakpoint('small', `
		font-size: ${props.size.medium || props.size.small};
	`)}

	${props => breakpoint('large', `
		font-size: ${props.size.large || props.size.medium || props.size.small};
	`)}
`;

Span.propTypes = {
	color: colorType,
	weight: fontType,
	size: shape({
		small: string,
		medium: string,
		large: string
	})
};

Span.defaultProps = {
	color: color.black,
	weight: font.regular,
	size: {small: '16px', large: '20px'}
};

export default Span;
