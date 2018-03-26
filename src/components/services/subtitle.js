import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const subtitle = styled.h3`
	font-size: 40px;
	font-weight: ${font.bold};
	letter-spacing: 7px;
	text-transform: uppercase;
	margin-top: 40px;

	${breakpoint('small', `
		margin-top: 0;
		font-size: 48px;
	`)}
`;

export default subtitle;
