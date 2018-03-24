import React from 'react';
import styled from 'styled-components';
import color from '../../../theme/color';
import breakpoint from '../../../theme/breakpoint';
import Dot from './dot';

const Div = styled.div`
	background: ${color.concrete};
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	display: none;
	height: 25px;
  padding: 8px 0 0 10px;

	${breakpoint('small', `
		display: block;
	`)}
`;

const Bar = () => (
	<Div>
		<Dot color="red"/>
		<Dot color="lemon"/>
		<Dot color="green"/>
	</Div>
);

export default Bar;
