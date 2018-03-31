import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Nav = styled.ul`
	list-style: none;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: ${font.semiBold};
	padding-left: 10px;

	> li {
		margin-bottom: 10px;
	}

	> li > a,
	> li > a:hover,
	> li > a:active {
		color: ${color.white};
	}

	${breakpoint('medium', `
		padding-left: 0;

		> li {
			margin-bottom: 0;
			margin-right: 30px;
			display: inline-block;
		}
	`)}
`;

export default Nav;
