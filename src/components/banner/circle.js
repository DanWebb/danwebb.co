import styled from 'styled-components';
import {colorType} from '../../types';
import color from '../../theme/color';

const Circle = styled.div`
	border: 31px solid ${props => color[props.color]};
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: -50px;
	width: 301px;
	height: 301px;
	z-index: 0;
	opacity: 0.1;
`;

Circle.propTypes = {
	color: colorType.isRequired
};

export default Circle;
