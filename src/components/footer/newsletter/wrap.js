import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoint';

const Wrap = styled.div`
	margin-top: 40px;
	max-width: 350px;

	${breakpoint('medium', `
		margin-top: 0;
	`)}
`;

export default Wrap;
