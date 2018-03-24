import styled from 'styled-components';
import {string} from 'prop-types';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const BackgroundBox = styled.div`
	background: ${props => color[props.color]};
	border-radius: 3px;
	height: 100%;
	width: 100%;
	position: absolute;
	top: -30px;
	left: 0;

	${props => breakpoint('medium', `
		width: 50%;
		height: calc(100% + 60px);
		left: ${props.right && '50%'};
	`)}
`;

BackgroundBox.propTypes = {
	color: string.isRequired
};

export default BackgroundBox;
