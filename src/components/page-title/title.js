import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Title = styled.h1`
	display: inline-block;
	padding-right: 11px;
	position: relative;
	font-size: 45px;
	font-weight: ${font.light};
	white-space: nowrap;
	margin-bottom: 40px;

	${breakpoint('small', `
		font-size: 64px;
		padding-right: 15px;
		margin-bottom: 60px;
	`)}
`;

export default Title;
