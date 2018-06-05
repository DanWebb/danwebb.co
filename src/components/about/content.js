import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Content = styled.div`
	align-self: center;
	max-width: 520px;
	margin: 0 auto;

	p {
		margin-top: 30px;
		letter-spacing: 2px;
		font-size: 14px;
		line-height: 20px;

		span {
			line-height: inherit;
		}
	}

	${breakpoint('small', `
		p {
			font-size: 18px;
			line-height: 27px;
			letter-spacing: 2.5px;
		}
	`)}

	${breakpoint('medium', `
		margin: 0;
	`)}
`;

export default Content;
