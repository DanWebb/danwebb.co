import styled from 'styled-components';
import {colorType} from '../../types';
import font from '../../theme/font';
import color from '../../theme/color';

const Title = styled.h1`
	color: ${props => color[props.color]};
	font-size: 24px;
	font-weight: ${font.semiBold};
	text-transform: uppercase;
`;

Title.propTypes = {
	color: colorType.isRequired
};

export default Title;
