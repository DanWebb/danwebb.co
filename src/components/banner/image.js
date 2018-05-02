import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Image = styled.img`
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	width: auto;
	height: 100%;
	z-index: 0;

	${breakpoint('xlarge', `
		display: block;
	`)}
`;

export default Image;
