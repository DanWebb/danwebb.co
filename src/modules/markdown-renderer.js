import marked from 'marked';
import hljs from 'highlightjs';

const renderer = new marked.Renderer();

renderer.blockquote = quote => `
	<div class="content-section quote-section">
		<div class="quote"></div>
		<div class="content">
			${quote}
		</div>
	</div>
`;

renderer.strong = text => text.length < 20 ? text : `
	<div class="content-section">
		<div class="exclamation-mark"></div>
		<div class="content">
			<p>${text}</p>
		</div>
	</div>
`;

renderer.code = code => `
	<div class="content-section code-section">
		<div class="brackets"></div>
		<div class="content">
			<pre><code>${hljs.highlightAuto(code).value}</code></pre>
		</div>
	</div>
`;

export default renderer;
