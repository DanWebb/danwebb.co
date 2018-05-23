import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';
import font from '../../theme/font';
import color from '../../theme/color';

const Text = styled.p`
	font-size: 14px;
	font-weight: ${font.regular};
	max-width: 450px;
	margin-top: 5px;
	letter-spacing: 2px;
  line-height: 20px;

	${breakpoint('small', `
		font-size: 18px;
		line-height: 25px;
	`)}

	${props => props.dark && `
		color: ${color.grey};
	`}
`;

export default Text;
