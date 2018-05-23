import React from 'react';
import {bool, string, node} from 'prop-types';
import {Link} from 'react-static';
import styled from 'styled-components';
import {colorType, fontType} from '../../types';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const StyledA = styled.a`
	color: ${props => color[props.color]};
	font-weight: ${props => font[props.weight]};
	position: relative;
	display: inline-block;

	${props => props.underlined && `
		border-bottom: 1px solid ${color[props.color]};
	`}

	${props => !props.underlined && breakpoint('small', `
		&::after {
			background: ${color[props.color]};
			opacity: 0.4;
			border-radius: 3px;
			content: '';
			display: block;
			height: 2px;
			width: 0;
			position: absolute;
			bottom: -2px;
			left: 49%;
			transition: width 0.3s;
			transform: translateX(-50%);
		}

		&:hover::after {
			width: 100%;
		}
	`)}
`;

const StyledLink = StyledA.withComponent(Link);

const A = ({external, href, color, weight, children, underlined}) => (
	<StyledA
		color={color}
		weight={weight}
		href={href}
		rel={external && 'noopener noreferrer'}
		target={external && '_blank'}
		underlined={underlined}
	>
		{children}
	</StyledA>
);

const InternalLink = ({to, color, weight, children}) => (
	<StyledLink to={to} color={color} weight={weight}>{children}</StyledLink>
);

A.propTypes = {
	href: string.isRequired,
	children: node.isRequired,
	external: bool,
	color: colorType,
	weight: fontType,
	underlined: bool
};

A.defaultProps = {
	external: false,
	underlined: false,
	color: 'red',
	weight: 'semiBold'
};

InternalLink.propTypes = {
	to: string.isRequired,
	children: node.isRequired,
	color: colorType,
	weight: fontType
};

InternalLink.defaultProps = {
	color: 'red',
	weight: 'semiBold'
};

export {InternalLink};
export default A;
