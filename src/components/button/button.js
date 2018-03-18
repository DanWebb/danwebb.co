import React from 'react';
import {node, string} from 'prop-types';
import Arrow from './arrow';
import StyledButton from './styled-button';

const Button = ({children, href}) => (
	<StyledButton href={href}>
		{children}
		<Arrow/>
	</StyledButton>
);

Button.propTypes = {
	children: node.isRequired,
	href: string
};

Button.defaultProps = {
	href: ''
};

export default Button;
