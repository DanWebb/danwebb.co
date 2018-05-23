import styled from 'styled-components';
import font from '../../../theme/font';
import breakpoint from '../../../theme/breakpoint';

const Title = styled.h1`
	position: relative;
	font-size: 25px;
	font-weight: ${font.regular};
	letter-spacing: 1.4px;
	margin: 15px 0;

	${breakpoint('medium', `
		font-size: 64px;
		margin: 25px 0;
	`)}
`;

export default Title;
