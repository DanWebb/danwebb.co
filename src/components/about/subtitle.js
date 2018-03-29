import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';

const Subtitle = styled.h3`
	color: ${color.red};
	font-weight: ${font.bold};
	font-size: 14px;
	letter-spacing: 3px;
	text-transform: uppercase;
	margin-bottom: 5px;
	line-height: 21px;
`;

export default Subtitle;
