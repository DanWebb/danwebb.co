import styled from 'styled-components';
import {colorType} from '../../types';
import color from '../../theme/color';

const backgroundColors = {
	red: color.red,
	purple: 'linear-gradient(125deg, rgba(232,219,249,0.08) 44%, #E8DBF9 100%)',
	blue: 'linear-gradient(125deg, rgba(35,181,211,0.08) 44%, rgba(35,181,211,0.4) 100%)',
	orange: 'linear-gradient(125deg, rgba(252,171,16,0.08) 44%, rgba(252,171,16,0.4) 100%)',
	green: 'linear-gradient(125deg, rgba(189,211,88,0.08) 44%, rgba(189,211,88,0.5) 100%)'
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
