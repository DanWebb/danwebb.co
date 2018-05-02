import styled from 'styled-components';
import {colorType} from '../../types';
import color from '../../theme/color';

const backgroundColors = {
	red: color.red,
	purple: 'linear-gradient(125deg, rgba(232,219,249,0.08) 44%, #E8DBF9 100%)'
};

const Section = styled.section`
	background: ${props => backgroundColors[props.color]};
	color: ${props => props.color === 'red' ? color.white : color.black};
	height: 425px;
	padding: 0 30px;
	position: relative;
`;

Section.propTypes = {
	color: colorType.isRequired
};

export default Section;
