import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Mobile = styled.div`
	${breakpoint('medium', `
		display: none;
	`)}
`;

export default Mobile;
