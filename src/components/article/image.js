import styled from 'styled-components';
import {Link} from 'react-static';

const Image = styled(Link)`
	display: block;
	width: 25%;
	height: 190px;
	background-image: url(${props => props.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export default Image;
