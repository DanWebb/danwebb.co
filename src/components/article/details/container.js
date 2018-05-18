import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoint';

const Container = styled.div`
	margin: 0 auto;

	> div:last-child {
		margin: 50px auto 0 auto;
		max-width: 400px;
	}

	${breakpoint('medium', `
		display: flex;

		> div {
			width: 50%;
		}

		> div:first-child {
			padding-right: 20px;
		}

		> div:last-child {
			margin: 0;
			padding-left: 20px;
		}
	`)}
`;

export default Container;
