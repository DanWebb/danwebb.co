import styled from 'styled-components';
import {colorType} from '../../types';
import font from '../../theme/font';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Text = styled.p`
	color: ${props => color[props.color]};
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
`;

Text.propTypes = {
	color: colorType.isRequired
};

export default Text;
