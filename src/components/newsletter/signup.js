import React from 'react';
import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';
import A from '../elements/a';

const Bar = styled.div`
	background: rgba(255, 246, 143, 0.5);
	text-align: center;
	font-weight: ${font.medium};
	font-size: 10px;
	text-transform: uppercase;
	padding: 8px 30px;
	letter-spacing: 1.2px;

	${breakpoint('medium', `
		display: none;
	`)}
`;

const Signup = () => (
	<Bar>
		Join my <A href="http://eepurl.com/dpYCZL" underlined external>occasional newsletter</A>{' '}
		for updates
	</Bar>
);

export default Signup;
