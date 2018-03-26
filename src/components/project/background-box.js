import styled from 'styled-components';
import {string} from 'prop-types';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const BackgroundBox = styled.div`
	background: ${props => color[props.color]};
	border-radius: 3px;
  height: calc(100% - 50px);
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;

	${props => breakpoint('medium', `
		width: 50%;
		height: calc(100% + 60px);
		left: ${props.right && '50%'};
		top: -30px;
	`)}
`;

BackgroundBox.propTypes = {
	color: string.isRequired
};

export default BackgroundBox;
