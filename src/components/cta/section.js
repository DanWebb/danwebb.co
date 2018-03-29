import styled from 'styled-components';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Section = styled.section`
	background: ${color.red};
	padding: 70px 30px;
	position: relative;
	overflow: hidden;

	> div {
		max-width: 670px;
		margin: 0 auto;
		color: ${color.white};
		text-align: center;
	}


	${breakpoint('small', `
		padding: 90px 30px 80px 30px;
	`)}
`;

export default Section;
