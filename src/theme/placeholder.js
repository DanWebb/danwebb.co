import colors from './color';

const styles = color => `
	color: ${colors[color]};
	opacity: 1;
	letter-spacing: 1px;
`;

const placeholder = color => `
	::-webkit-input-placeholder {
		${styles(color)}
	}

	::-moz-placeholder {
		${styles(color)}
	}

	:-ms-input-placeholder {
		${styles(color)}
	}

	:-moz-placeholder {
		${styles(color)}
	}
`;

export default placeholder;
