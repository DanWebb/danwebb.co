import styled from 'styled-components';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Subnav = styled.ul`
	list-style: none;
	font-size: 14px;
	margin-top: 10px;

	> li {
		margin-bottom: 0;
	}

	> li > a,
	> li > a:hover,
	> li > a:active {
		color: ${color.white};
	}

	${breakpoint('medium', `
		margin-top: 15px;

		> li {
			margin-bottom: 0;
			display: inline-block;
		}

		> li:not(:last-child)::after {
			content: '-';
			display: inline-block;
			margin: 0 20px;
		}
	`)}
`;

export default Subnav;
