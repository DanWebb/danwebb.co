import styled from 'styled-components';
import {string, bool} from 'prop-types';
import color from '../../theme/color';
import {colorType} from '../../types';

const Divider = styled.div`
	border-radius: 1px;
	height: 2px;
	background: ${props => color[props.color]};
	width: ${props => props.width};
	margin: ${props => props.centered ? `${props.spacing} auto` : `${props.spacing} 0`};
`;

Divider.propTypes = {
	color: colorType,
	width: string,
	padding: string,
	centered: bool
};

Divider.defaultProps = {
	color: 'black',
	width: '50px',
	spacing: '5px',
	centered: true
};

export default Divider;
