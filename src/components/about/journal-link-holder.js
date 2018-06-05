import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const JournalLinkHolder = styled.div`
	margin-bottom: 8px;
	font-size: 14px;
	letter-spacing: 1.5px;
	line-height: 25px;

	${breakpoint('small', `
		margin-bottom: 3px;
	`)}
`;

export default JournalLinkHolder;
