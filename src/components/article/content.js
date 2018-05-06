import styled from 'styled-components';
import {Link} from 'react-static';
import breakpoint from '../../theme/breakpoint';

const Content = styled(Link)`
	width: 75%;
	display: block;
	padding-right: 30px;

	${breakpoint('small', `
		padding-right: 50px;
	`)}
`;

export default Content;
