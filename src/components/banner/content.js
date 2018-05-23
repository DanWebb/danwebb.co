import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';
import settings from '../../theme/settings';

const Content = styled.div`
	position: relative;
	max-width: ${settings.containerWidth};
	margin: 0 auto;
	padding: 140px 0;

	${breakpoint('small', `
		padding: 130px 0;
	`)}
`;

export default Content;
