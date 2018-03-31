import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Desktop = styled.div`
	display: none;

	${breakpoint('medium', `
		display: block;
	`)}
`;

export default Desktop;
