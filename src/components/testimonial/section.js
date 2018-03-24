import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Section = styled.section`
	max-width: 1055px;
	margin: 0 auto;
	padding: 50px 30px;


	${breakpoint('small', `
		padding: 125px 30px;
	`)}
`;

export default Section;
