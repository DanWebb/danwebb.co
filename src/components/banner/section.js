import styled from 'styled-components';
import {colorType} from '../../types';
import color from '../../theme/color';

const Section = styled.section`
	background: ${props => color[props.color]};
	color: ${props => props.color === 'red' ? color.white : color.black};
	height: 425px;
	padding: 0 30px;
`;

Section.propTypes = {
	color: colorType.isRequired
};

export default Section;
