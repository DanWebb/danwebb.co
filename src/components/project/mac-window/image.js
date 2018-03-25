import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoint';

const Image = styled.img`
	display: block;
	width: 100%;
	height: auto;

	${breakpoint('medium', `
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	`)}
`;

export default Image;
