import styled from 'styled-components';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Content = styled.div`
	font-size: 16px;
	font-weight: ${font.light};
	line-height: 25px;

	${breakpoint('small', `
		font-size: 20px;
		width: calc(100% - 50px);
	`)}
`;

export default Content;
