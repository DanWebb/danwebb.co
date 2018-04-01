import styled from 'styled-components';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Dot = styled.div`
	border: 2px solid ${color.red};
	border-radius: 50%;
	height: 10px;
	width: 10px;
	position: absolute;
	right: 0;
	bottom: 10px;

	${breakpoint('small', `
		border: 3px solid ${color.red};
		bottom: 14px;
		height: 12px;
		width: 12px;
	`)}
`;

export default Dot;
