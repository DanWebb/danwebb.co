import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';

const Author = styled.div`
	color: ${color.red};
	font-size: 20px;
	font-weight: ${font.bold};
	text-transform: uppercase;
	margin-top: 20px;

	span {
		position: relative;
		top: -20px;
		padding-right: 5px;
	}
`;

export default Author;
