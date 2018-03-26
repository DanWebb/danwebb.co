import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const TwoColumns = styled.div`
	${breakpoint('small', `
		display: flex;

		> div {
			width: 50%;
		}
	`)}
`;

export default TwoColumns;
