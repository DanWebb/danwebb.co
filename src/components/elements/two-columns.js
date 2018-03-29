import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const TwoColumns = styled.div`
	${breakpoint('medium', `
		display: flex;

		> div {
			width: 50%;
		}
	`)}
`;

export default TwoColumns;
