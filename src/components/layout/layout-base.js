import React from 'react';
import Routes from 'react-static-routes';
import {Router} from 'react-static';
import {injectGlobal} from 'styled-components';
import globalStyles from '../../theme/global-styles';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	${globalStyles}
`;

const LayoutBase = () => <Router><Routes/></Router>;

export default LayoutBase;
