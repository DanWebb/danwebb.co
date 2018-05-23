import styled from 'styled-components';
import {Link} from 'react-static';

const Image = styled(Link)`
	display: block;
	width: 25%;
	height: 0;
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding-bottom: 30%;
`;

export default Image;
