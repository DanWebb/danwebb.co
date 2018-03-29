import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Content = styled.div`
	align-self: center;
	max-width: 520px;
	margin: 0 auto;

	p {
		margin-top: 30px;
		letter-spacing: 3px;
		font-size: 14px;
	}

	${breakpoint('small', `
		p {
			font-size: 18px;
		}
	`)}

	${breakpoint('medium', `
		margin: 0;
	`)}
`;

export default Content;
