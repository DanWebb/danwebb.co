import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Container = styled.div`
	background: #FBFBFB;
	padding: 30px 0;
	margin: 15px -50vw 50px -50vw;
	position: relative;
	left: 50%;
	right: 50%;
	width: 100vw;

	> div {
		max-width: 500px;
		margin: 0 auto;
		padding: 0 30px;
	}

	${breakpoint('medium', `
		background: transparent;
		padding: 0;
		margin: 0;
		width: auto;
		position: static;

		> div {
			max-width: 100%;
			margin: 0;
			padding: 0;
		}
	`)}
`;

export default Container;
