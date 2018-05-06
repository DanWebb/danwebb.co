import styled from 'styled-components';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Description = styled.p`
	font-size: 12px;
	color: ${color.gray};

	${breakpoint('medium', `
		font-size: 18px;
	`)}
`;

export default Description;
