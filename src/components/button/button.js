import React from 'react';
import {node, string, bool} from 'prop-types';
import {colorType} from '../../types';
import Arrow from './arrow';
import StyledButton from './styled-button';

const Button = ({children, href, secondary, small, color, background}) => (
	<StyledButton href={href} secondary={secondary} small={small} color={color} background={background}>
		{children}
		{!secondary && <Arrow/>}
	</StyledButton>
);

Button.propTypes = {
	children: node.isRequired,
	href: string,
	secondary: bool,
	small: bool,
	color: colorType,
	background: colorType
};

Button.defaultProps = {
	href: '',
	secondary: false,
	small: false,
	color: 'white',
	background: 'red'
};

export default Button;
