import UnderlinedTitle from '../../elements/underlined-title';

const Title = UnderlinedTitle.extend`
	font-size: 11px;
	text-align: center;

	&::after {
		height: 1px;
		width: 30px;
		margin: 10px auto 60px auto;
	}
`;

export default Title;
