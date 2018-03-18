import styled, {keyframes} from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';
import {colorType} from '../../types';

const rotate = keyframes`
	from {
		transform: rotate(110deg);
	}

	to {
		transform: rotate(470deg);
	}
`;

const StyledButton = styled.a`
	display: inline-block;
	border-radius: 30px;
  box-sizing: border-box;
	width: 100%;
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	text-align: left;
	letter-spacing: 2px;
	font-size: 12px;
	padding: 12px 20px 12px;
	max-width: 194px;
	font-weight: ${font.bold};
	background: ${props => color[props.background]};
	color: ${props => color[props.color]};

	svg {
		position: absolute;
		top: 7px;
		right: 10px;

		rect {
			fill: ${props => color[props.color]};
		}

		path {
			stroke: ${props => color[props.color]};
		}
	}

	&:hover svg path {
		animation: ${rotate} 0.5s forwards;
		transform-origin: 59% 59%;
	}

	${breakpoint('small', `
		font-size: 14px;
		padding: 15px 20px 16px;
		max-width: 235px;
		
		svg {
			top: 9px;
	    right: 12px;
			width: 30px
			height: 30px;
		}
	`)}
`;

StyledButton.propTypes = {
	color: colorType,
	background: colorType
};

StyledButton.defaultProps = {
	color: 'white',
	background: 'red'
};

export default StyledButton;
