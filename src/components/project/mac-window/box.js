import styled from 'styled-components';
import color from '../../../theme/color';
import breakpoint from '../../../theme/breakpoint';

const Box = styled.div`
	position: relative;
	z-index: 1;
	margin-top: -50px;

	${breakpoint('medium', `
		border: 1px solid ${color.concrete};
		border-radius: 6px;
		margin-left: 58px;
	`)}
`;

export default Box;
