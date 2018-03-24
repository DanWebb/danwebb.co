import styled from 'styled-components';
import color from '../../../theme/color';
import {colorType} from '../../../types';

const Dot = styled.div`
	border-radius: 50%;
	margin-right: 5px;
	float: left;
	height: 8px;
	width: 8px;

	${props => props.color === 'red' ? `
		border: 1px solid ${color.red};
	` : `
		background: ${color[props.color]};
	`}
`;

Dot.propTypes = {
	color: colorType.isRequired
};

export default Dot;
