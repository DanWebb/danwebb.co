import reset from './reset';
import font from './font';
import breakpoint from './breakpoint';
import color from './color';

const globalStyles = `
	@import url('https://fonts.googleapis.com/css?family=Dosis:300,400,600,700,800');

	@font-face {
    font-family: 'Hack';
    src: url('/hack-regular-webfont.woff2') format('woff2'),
         url('/hack-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
	}

	${reset}

	body {
		color: ${color.black};
		font-family: ${font.family};
		font-weight: ${font.regular};
		font-size: 16px;
		letter-spacing: 1px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
		max-width: 100%;
		overflow-x: hidden;

		${breakpoint('small', `
			font-size: 20px;
		`)}
	}

	::selection {
		background: ${color.red};
		color: ${color.white};
	}

	::-moz-selection {
		background: ${color.red};
		color: ${color.white};
	}

	a {
		text-decoration: none;
	}
`;

export default globalStyles;
