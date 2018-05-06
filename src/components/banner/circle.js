import styled from 'styled-components';
import {colorType} from '../../types';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Circle = styled.div`
	border: 31px solid ${props => color[props.color]};
	border-radius: 50%;
	position: absolute;
	top: 45px;
	left: -120px;
	width: 301px;
	height: 301px;
	z-index: 0;
	opacity: 0.09;

	${breakpoint('small', `
		top: 40px;
	`)}
`;

Circle.propTypes = {
	color: colorType.isRequired
};

export default Circle;
