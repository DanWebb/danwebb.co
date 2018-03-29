import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h2`
	color: ${color.red};
	font-weight: ${font.bold};
	font-size: 48px;
	letter-spacing: 3px;
	text-transform: uppercase;

	${breakpoint('small', `
		font-size: 80px;
	`)}
`;

export default Title;
