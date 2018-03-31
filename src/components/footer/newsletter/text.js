import styled from 'styled-components';

const Text = styled.p`
	font-size: 12px;

	&:not(:first-child) {
		margin-top: 10px;
	}
`;

export default Text;
