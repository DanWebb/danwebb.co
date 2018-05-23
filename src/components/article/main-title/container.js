import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoint';

const Container = styled.div`
	max-width: 895px;
	text-align: center;
	margin: 45px auto;
	padding: 0 30px;

	${breakpoint('medium', `
		margin: 60px auto;
	`)}
`;

export default Container;
