import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Author = styled.div`
	color: ${color.red};
	font-size: 16px;
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

	${breakpoint('small', `
		font-size: 20px;
	`)}
`;

export default Author;
