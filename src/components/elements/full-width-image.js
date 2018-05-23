import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const FullWidthImage = styled.img`
	object-fit: cover;
	width: 100vw;
	height: 50vh;
	max-height: 573px;

	${breakpoint('medium', `
		height: 80vh;
	`)}
`;

export default FullWidthImage;
