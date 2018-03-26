import styled from 'styled-components';
import color from '../../../theme/color';
import {colorType} from '../../../types';
import breakpoint from '../../../theme/breakpoint';

const Box = styled.div`
	border-radius: 3px;
	padding: 20px 25px 20px 25px;
	z-index: 3;
	width: calc(100% - 30px);
	max-width: 345px;
	position: relative;
  top: -100px;
	margin: 55px auto 0 auto;

	&::before,
	&::after {
		border-radius: 3px;
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
	}

	&::before {
		background: ${color.white};
		box-shadow: 0 7px 30px 0 rgba(0, 0, 0, 0.1);
		left: 0;
		top: 0;
		z-index: -1;
	}

	&::after {
		display: none;
		background: ${props => color[props.background]};
		left: ${props => props.right ? '-30px' : '0'};
		top: 30px;
    width: calc(100% + 33px);
		z-index: -2;
	}

	${props => breakpoint('medium', `
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin: 0;

		${props.right ? `
			right: 30px;
		` : `
			left: 30px;
		`};

		&::after {
			display: block;
		}
	`)}

	${props => breakpoint('large', `
		${props.right ? `
			right: 0;
		` : `
			left: 0;
		`};
	`)}
`;

Box.propTypes = {
	background: colorType.isRequired
};

export default Box;
