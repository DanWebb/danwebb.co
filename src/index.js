import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import LayoutBase from './components/layout/layout-base';

if (typeof document !== 'undefined') {
	const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

	const render = Comp => renderMethod(
		<AppContainer><Comp/></AppContainer>,
		document.getElementById('root'),
	);

	render(LayoutBase);

	if (module.hot) {
		module.hot.accept(undefined, () => render(LayoutBase));
	}
}

export default LayoutBase;
