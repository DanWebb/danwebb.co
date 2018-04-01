import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Container = styled.div`
	text-align: center;
	border-bottom: 3px solid rgba(249, 65, 93, 0.05);
	margin-bottom: 40px;

	${breakpoint('small', `
		margin-bottom: 60px;
	`)}
`;

export default Container;
