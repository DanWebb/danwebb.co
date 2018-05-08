import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h3`
	font-size: 16px;
	font-weight: ${font.semiBold};
	letter-spacing: 2px;
	color: ${color.black};
	margin: 5px 0;

	${breakpoint('medium', `
		font-size: 24px;
	`)}
`;

export default Title;
