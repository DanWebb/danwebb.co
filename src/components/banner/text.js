import styled from 'styled-components';
import {colorType} from '../../types';
import font from '../../theme/font';
import color from '../../theme/color';

const Text = styled.p`
	color: ${props => color[props.color]};
	font-size: 18px;
	font-weight: ${font.regular};
`;

Text.propTypes = {
	color: colorType.isRequired
};

export default Text;
