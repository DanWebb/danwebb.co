import styled from 'styled-components';
import color from '../../../theme/color';
import breakpoint from '../../../theme/breakpoint';

const Title = styled.h3`
	color: ${color.red};
	font-size: 26px;

	${breakpoint('small', `
		font-size: 36px;
	`)}
`;

export default Title;
