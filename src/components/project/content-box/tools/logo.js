import styled from 'styled-components';
import breakpoint from '../../../../theme/breakpoint';

const Logo = styled.div`
	margin: 0 0 10px 12px;
	position: relative;

	> img {
		display: block;
	}

	${breakpoint('small', `
		margin: 0 0 12px 14px;
	`)}
`;

export default Logo;
