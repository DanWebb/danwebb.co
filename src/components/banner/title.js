import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h1`
	font-size: 20px;
	font-weight: ${font.semiBold};
	text-transform: uppercase;
	letter-spacing: 3px;

	${breakpoint('small', `
		font-size: 24px;
	`)}
`;

export default Title;
