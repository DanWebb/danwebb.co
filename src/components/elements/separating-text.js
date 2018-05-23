import styled from 'styled-components';
import {oneOf} from 'prop-types';
import color from '../../theme/color';
import font from '../../theme/font';

const SeparatingText = styled.h4`
	background: rgba(249, 65, 93, 0.028);
	border-${props => props.linePos}: 2px solid rgba(249, 65, 93, 0.1);
	border-${props => props.linePos === 'top' ? 'bottom' : 'top'}-right-radius: 3px;
	border-${props => props.linePos === 'top' ? 'bottom' : 'top'}-left-radius: 3px;
	color: ${color.gray};
	padding: 11px 30px;
	font-size: 9px;
	font-weight: ${font.semiBold};
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 50px 0;
`;

SeparatingText.propTypes = {
	linePos: oneOf(['top', 'bottom']).isRequired
};

export default SeparatingText;
