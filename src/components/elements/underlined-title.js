import styled from 'styled-components';
import font from '../../theme/font';
import color from '../../theme/color';

const Title = styled.h2`
	font-size: 18px;
	font-weight: ${font.semiBold};
	text-transform: uppercase;
	letter-spacing: 2px;

	&::after {
		background: ${color.black};
		content: '';
		display: block;
		height: 1px;
		width: 44px;
		margin: 15px auto 60px auto;
	}
`;

export default Title;
