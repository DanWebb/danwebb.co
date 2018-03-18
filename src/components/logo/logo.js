import React from 'react';
import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';
import Dot from './dot';

const LogoHolder = styled.h1`
	display: inline-block;
	padding-right: 11px;
	position: relative;
	font-size: 45px;
	font-weight: ${font.light};
	white-space: nowrap;
	margin-bottom: 15px;

	${breakpoint('small', `
		font-size: 64px;
		padding-right: 15px;
		margin-bottom: 25px;
	`)}
`;

const Logo = () => <LogoHolder>danwebb<Dot/></LogoHolder>;

export default Logo;
