import styled from 'styled-components';
import color from '../../theme/color';
import placeholder from '../../theme/placeholder';

const Input = styled.input`
	background: transparent;
	border-bottom: 1px solid ${color.white};
	color: ${color.white};
	font-size: 14px;
	width: calc(100% - 60px);
	letter-spacing: 1px;
	padding-right: 10px;

	&:focus,
	&:active {
		outline: 0;
	}

	${placeholder('white')}

	${props => props.dark && `
		color: ${color.red};
		border-bottom: 1px solid ${color.red};
		${placeholder('red')}
	`}
`;

export default Input;
