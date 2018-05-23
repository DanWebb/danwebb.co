import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';

const Button = styled.button`
	background: ${color.white};
	border-radius: 2px;
	color: ${color.red};
	font-weight: ${font.semiBold};
	font-size: 12px;
	text-transform: uppercase;
	text-align: center;
	padding: 6px 0;
	margin-left: -1px;
	width: 60px;

	&:focus,
	&:active {
		outline: 0;
	}

	${props => props.dark && `
		color: ${color.white};
		background: ${color.red};
	`}
`;

export default Button;
