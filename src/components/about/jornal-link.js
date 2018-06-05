import styled from 'styled-components';
import {Link} from 'react-static';
import color from '../../theme/color';
import font from '../../theme/font';

const JornalLink = styled.div`
	color: ${color.red};
	border-bottom: 1px solid ${color.red};
	padding-bottom: 2px;
	font-weight: ${font.semiBold};
`;

export default JornalLink.withComponent(Link);
