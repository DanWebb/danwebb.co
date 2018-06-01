import styled from 'styled-components';
import color from '../../theme/color';
import font from '../../theme/font';
import breakpoint from '../../theme/breakpoint';

const Text = styled.div`
	margin-bottom: 60px;

	h2, a {
		color: ${color.red};
	}

	h2, h3 {
		font-size: 22px;
		font-weight: ${font.bold};
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-top: 50px;
	}

	h3 {
		font-size: 16px;
		font-weight: ${font.regular};
		letter-spacing: 2px;
		margin-top: 35px;
	}

	p {
		font-size: 16px;
		margin: 10px 0 20px 0;
		line-height: 25px;
	}

	a {
		font-weight: ${font.medium};
	}

	img {
		width: 100%;
		margin: 35px 0;
		display: block;
	}

	ul, ol {
		list-style: none;
		padding-left: 1.2em;
		margin-bottom: 20px;
		counter-reset: numbers;
	}

	ol {
		padding-left: 1.4em;
	}

	ul li,
	ol li {
		font-size: 16px;
		position: relative;
		padding-bottom: 10px;
		margin-left: -5px;
	}

	ul li::before {
		content: "\\2022";
		color: ${color.red};
		position: absolute;
		left: -1em;
		padding-right: 0;
		font-weight: bold;
	}

	ol li::before {
		content: counter(numbers, decimal-leading-zero);
		counter-increment: numbers;
		color: ${color.red};
		position: absolute;
		left: -1.9em;
		top: 4px;
		padding-right: 0;
		font-size: 12px;
		font-weight: ${font.semiBold};
	}

	strong {
		color: ${color.red};
		font-weight: ${font.extraBold};
	}

	.caption {
		font-size: 12px;
		color: ${color.gray};
		margin-top: -25px;
    margin-bottom: 20px;
		text-align: center;
	}

	code {
		font-size: 13px;
		line-height: 16px;
		font-family: ${font.secondary};
		background: rgba(249, 65, 93, 0.05);
		padding: 5px;

		.hljs-keyword {
			color: ${color.red};
		}
	}

	.content-section {
		position: relative;
		margin-bottom: 35px;
		margin-top: 35px;

		code {
			background: transparent;
			padding: 0;
		}

		.content {
			background: rgba(249, 65, 93, 0.05);
			border-left: 2px solid ${color.red};
			border-radius: 3px;
			padding: 15px 15px 15px 30px;
		}

		&.code-section .content {
			overflow-x: auto;
		}

		p {
			margin: 0;
		}

		&.quote-section strong {
			color: ${color.black};
			display: block;
			font-size: 15px;
			font-weight: ${font.semiBold};
			text-transform: uppercase;
			letter-spacing: 1px;
			margin-top: 3px;
		}

		.quote,
		.exclamation-mark,
		.brackets {
			border-radius: 50%;
			position: absolute;
			top: -1px;
	    left: -21px;
			border: 2px solid ${color.red};
			background-color: #fff;
			height: 45px;
	    width: 45px;
	    padding: 11px 7px;

			&::after {
				content: '';
				display: block;
				background-size: contain;
				background-position: left top;
				background-repeat: no-repeat;
				height: 25px;
				width: 25px;
			}
		}

		.quote::after {
			background-image: url(/quote.svg);
		}

		.exclamation-mark {
	    padding: 4px 16px;

			&::after {
				background-image: url(/exclamation.svg);
				height: 34px;
				width: 11px;
			}
		}

		.brackets {
			padding: 13px 6px;

			&::after {
				background-image: url(/brackets.svg);
				height: 16px;
				width: 30px;
			}
		}
	}

	${breakpoint('medium', `
		h2 {
			font-size: 26px;
		}

		h3 {
			font-size: 20px;
		}

		p {
			font-size: 18px;
			line-height: 28px;
		}

		ul li,
		ol li {
			font-size: 18px;
		}

		.content-section {
			margin-left: -35px;

			.content {
				padding: 15px 15px 15px 35px;
			}
		}
	`)}
`;

export default Text;
