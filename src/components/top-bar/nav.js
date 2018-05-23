import styled from 'styled-components';
import font from '../../theme/font';

const Nav = styled.nav`
	flex-grow: 1;
	align-self: center;
	text-align: right;
	margin-top: -2px;

	a {
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: ${font.semiBold};
		font-size: 18px;
	}
`;

export default Nav;
