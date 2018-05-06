import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const CreatedAt = styled.h6`
	color: #C4C3C5;
	font-weight: ${font.regular};
	font-size: 10px;
	letter-spacing: 1.5px;
	margin-top: 5px;

	${breakpoint('medium', `
		font-size: 13px;
		margin-top: 10px;
	`)}
`;

export default CreatedAt;
