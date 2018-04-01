import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';

const Text = styled.div`
	h2, a {
		color: ${color.red};
	}

	h2, h3 {
		font-size: 26px;
		font-weight: ${font.bold};
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-bottom: 5px;
	}

	h3 {
		font-size: 20px;
		font-weight: ${font.regular};
		letter-spacing: 2px;
	}

	p {
		font-size: 18px;
	}

	a {
		font-weight: ${font.medium};
	}

	ul {
		list-style: none;
		padding-left: 1.1225em;
	}

	ul li {
		position: relative;
		padding-bottom: 3px;
	}

	ul li::before {
		content: "\\2022";
		color: ${color.red};
		position: absolute;
		left: -1.1225em;
		padding-right: 0;
	}
`;

export default Text;
