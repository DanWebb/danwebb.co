import styled from 'styled-components';
import posed from 'react-pose';
import {spring} from 'popmotion';
import color from '../../../theme/color';
import {colorType} from '../../../types';
import breakpoint from '../../../theme/breakpoint';

const Box = styled(posed.div({
	hideLeft: {x: '-130%'},
	hideRight: {x: '130%'},
	show: {
		x: '0%',
		transition: ({from, to}) => spring({from, to, stiffness: 110, damping: 13, mass: 1.5})
	}
}))`
	border-radius: 3px;
	padding: 20px 25px 20px 25px;

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

	${breakpoint('medium', `
		&::after {
			display: block;
		}
	`)}
`;

Box.propTypes = {
	background: colorType.isRequired
};

export default Box;
