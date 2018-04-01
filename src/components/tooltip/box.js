import styled, {keyframes} from 'styled-components';
import {string, bool} from 'prop-types';
import color from '../../theme/color';

const show = keyframes`
  0% { transform: scale(1); }
	50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Box = styled.div`
	opacity: ${props => props.showTip ? '1' : '0'};
	background: ${color.red};
	border-radius: 3px;
	text-align: center;
	padding: 15px;
	min-width: 160px;
	width: ${props => props.width};
	position: absolute;
  left: calc(50% - ${props => Number(props.width.replace('px', '')) / 2}px);
	top: calc(100% + 22px);
	transition: opacity 200ms linear;

	${props => props.showTip && `animation: ${show} 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);`}

	&::after {
		border: solid transparent;
		border-color: transparent;
		border-bottom-color: ${color.red};
		border-width: 15px;
		margin-left: -15px;
		content: '';
		height: 0;
		width: 0;
		position: absolute;
		bottom: 100%;
		left: 50%;
		pointer-events: none;
	}
`;

Box.propTypes = {
	width: string,
	showTip: bool
};

Box.defaultProps = {
	width: '160px',
	showTip: false
};

export default Box;
