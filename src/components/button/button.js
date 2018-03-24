import React from 'react';
import {node, string, bool} from 'prop-types';
import Arrow from './arrow';
import StyledButton from './styled-button';

const Button = ({children, href, secondary, small}) => (
	<StyledButton href={href} secondary={secondary} small={small}>
		{children}
		{!secondary && <Arrow/>}
	</StyledButton>
);

Button.propTypes = {
	children: node.isRequired,
	href: string,
	secondary: bool,
	small: bool
};

Button.defaultProps = {
	href: '',
	secondary: false,
	small: false
};

export default Button;
