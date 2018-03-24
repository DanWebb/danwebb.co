import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Wrap = styled.div`
	${breakpoint('small', `
		display: flex;
	`)}
`;

export default Wrap;
