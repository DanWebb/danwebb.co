import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Quote = styled.div`
	background-image: url(/quote.svg);
	background-size: 48px 36px;
	background-position: left top;
	background-repeat: no-repeat;
  margin: 0 auto 25px auto;
	width: 49px;
	height: 37px;

	${breakpoint('small', `
		margin: 4px 0 0 0;
		width: 72px;
		height: auto;
	`)}
`;

export default Quote;
