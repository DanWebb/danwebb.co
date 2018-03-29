import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Section = styled.section`
	position: relative;
	margin: 100px 0 100px 0;
	padding: 0 30px;

	> div {
		max-width: 1055px;
		margin: 0 auto;
	}

	${breakpoint('small', `
		margin: 130px 0;
	`)}
`;

export default Section;
