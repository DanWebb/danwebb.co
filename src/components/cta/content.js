import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Content = styled.p`
	font-size: 16px;
	letter-spacing: 3px;
	margin-bottom: 40px;

	${breakpoint('small', `
		font-size: 27px;
	`)}
`;

export default Content;
