import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Circle = styled.div`
	border: 50px solid rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	position: absolute;
	top: 20px;
	left: 50%;
	margin-left: -220px;
	width: 440px;
	height: 440px;
	z-index: 0;

	${breakpoint('small', `
		border: 70px solid rgba(255, 255, 255, 0.1);
		width: 720px;
		height: 720px;
		margin-left: -360px;
	`)}
`;

export default Circle;
