import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Container = styled.article`
	display: flex;
	padding-bottom: 30px;

	${breakpoint('medium', `
		padding-bottom: 60px;
	`)}
`;

export default Container;
