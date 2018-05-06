import styled from 'styled-components';
import {Link} from 'react-static';
import color from '../../theme/color';
import font from '../../theme/font';
import {colorType} from '../../types';

const Category = styled(Link)`
	display: block;
	border-left: 1px solid ${props => color[props.color]};
	padding: 3px 0 3px 15px;
	margin: 13px 0;
	opacity: 0.75;
	max-width: 250px;

	h5 {
		color: ${props => color[props.color]};
		font-weight: ${font.semiBold};
		font-size: 11px;
		letter-spacing: 1.5px;
		margin-bottom: 5px;
		text-transform: uppercase;
	}

	p {
		color: #777777;
		font-size: 11px;
		margin: 0;
	}
`;

Category.propTypes = {
	color: colorType.isRequired
};

export default Category;
