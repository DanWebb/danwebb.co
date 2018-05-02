import styled from 'styled-components';
import {colorType} from '../../types';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h1`
	color: ${props => color[props.color]};
	font-size: 20px;
	font-weight: ${font.semiBold};
	text-transform: uppercase;
	letter-spacing: 3px;

	${breakpoint('small', `
		font-size: 24px;
	`)}
`;

Title.propTypes = {
	color: colorType.isRequired
};

export default Title;
