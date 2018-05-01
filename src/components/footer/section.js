import styled from 'styled-components';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';
import settings from '../../theme/settings';

const Section = styled.footer`
	background: ${color.amaranth};
	color: ${color.white};
	padding: 0 30px;

	> div {
		display: flex;
		flex-wrap: wrap;
		max-width: ${settings.containerWidth};
		margin: 0 auto;
		padding: 50px 0 30px 0;
	}

	> div > div:nth-child(1),
	> div > div:nth-child(2) {
		width: 50%;
	}

	> div > div:nth-child(3) {
		width: 100%;
	}

	${breakpoint('medium', `
		> div > div:nth-child(1) {
			width: 14.285714286%;
		}

		> div > div:nth-child(2) {
			width: 56.142857143%;
		}

		> div > div:nth-child(3) {
			width: 29.571428571%;
		}
	`)}
`;

export default Section;
