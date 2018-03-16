const reset = `
	html,
	body,
	div,
	span,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	abbr,
	code,
	em,
	img,
	small,
	strong,
	sub,
	sup,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	footer,
	header,
	nav,
	section,
	time,
	audio,
	video {
	  padding: 0;
	  border: 0;
	  margin: 0;
	  background: transparent;
	  font-size: 100%;
	  font-weight: inherit;
	  vertical-align: baseline;
	}

	article,
	aside,
	figure,
	footer,
	header,
	nav,
	section {
	  display: block;
	}

	html {
	  box-sizing: border-box;
	  overflow-y: scroll;
	}

	*,
	*::before,
	*::after {
	  box-sizing: inherit;
	}

	img,
	object {
	  max-width: 100%;
	}

	ul {
	  list-style: none;
	}

	table {
	  border-collapse: collapse;
	  border-spacing: 0;
	}

	th {
	  font-weight: bold;
	  vertical-align: bottom;
	}

	td {
	  font-weight: normal;
	  vertical-align: top;
	}

	input,
	select {
	  vertical-align: middle;
	}

	input[type='radio'] {
	  vertical-align: text-bottom;
	}

	input[type='checkbox'] {
	  vertical-align: bottom;
	}

	strong {
	  font-weight: bold;
	}

	label,
	input[type='file'] {
	  cursor: pointer;
	}

	input,
	select,
	textarea {
	  border: 0;
	  margin: 0;
	}

	button,
	input[type='button'],
	input[type='submit'] {
	  padding: 0;
	  border: 0;
	  border-radius: 0;
	  margin: 0;
	  background: transparent;
	  cursor: pointer;
	}

	button::-moz-focus-inner {
	  padding: 0;
	  border: 0;
	}
`;

export default reset;
