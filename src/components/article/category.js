import styled from 'styled-components';
import {oneOf} from 'prop-types';
import color from '../../theme/color';
import font from '../../theme/font';

const categoryColors = {
	work: color.purple,
	story: color.blue,
	development: color.orange,
	thought: color.green
};

const Category = styled.h5`
	color: ${props => categoryColors[props.category]};
	font-size: 11px;
	font-weight: ${font.semiBold};
	letter-spacing: 1.5px;
	text-transform: uppercase;
`;

Category.propTypes = {
	category: oneOf(['work', 'story', 'development', 'thought'])
};

export default Category;
