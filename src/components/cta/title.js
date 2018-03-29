import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h2`
	color: ${color.white};
	font-size: 26px;
	font-weight: ${font.bold};
	text-transform: uppercase;
	letter-spacing: 2px;

	${breakpoint('small', `
		font-size: 48px;
	`)}
`;

export default Title;
