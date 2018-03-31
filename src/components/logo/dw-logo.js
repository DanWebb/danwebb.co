import React from 'react';
import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';
import OriginalDot from './dot';

const LogoHolder = styled.h3`
	color: ${color.white};
	display: inline-block;
	padding-right: 11px;
	position: relative;
	font-size: 36px;
	font-weight: ${font.light};
	white-space: nowrap;
	top: -5px;
`;

const Dot = OriginalDot.extend`
	border: 1px solid ${color.white};
	width: 7px;
	height: 7px;
	right: 5px;
  bottom: 8px;

	${breakpoint('small', `
		border: 1px solid ${color.white};
		width: 7px;
		height: 7px;
    bottom: 8px;
	`)}
`;

const Logo = () => <LogoHolder>dw<Dot/></LogoHolder>;

export default Logo;
