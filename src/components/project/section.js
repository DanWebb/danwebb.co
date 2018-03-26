import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Section = styled.section`
	position: relative;
	margin: 80px 0 0 0;

	${breakpoint('medium', `
		margin: 80px 0 30px 0;
	`)}
`;

export default Section;
