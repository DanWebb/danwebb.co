import styled from 'styled-components';
import color from '../../theme/color';

const Text = styled.p`
	font-size: 12px;
	color: ${props => props.dark ? color.gray : color.white};

	&:not(:first-child) {
		margin-top: 10px;
	}
`;

export default Text;
