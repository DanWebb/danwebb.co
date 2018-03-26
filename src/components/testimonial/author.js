import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';

const Author = styled.div`
	color: ${color.red};
	font-size: 20px;
	font-weight: ${font.bold};
	text-transform: uppercase;
	margin-top: 23px;
	display: flex;
	align-items: center;

	span {
		padding: 0 10px 5px 0;
	}

	img {
		display: block;
		height: auto;
	}
`;

export default Author;
