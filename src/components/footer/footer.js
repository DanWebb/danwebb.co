import React from 'react';
import {Link} from 'react-static';
import settings from '../../theme/settings';
import Logo from '../logo/dw-logo';
import Divider from '../divider/divider';
import Mobile from '../elements/mobile';
import Desktop from '../elements/desktop';
import Section from './section';
import Nav from './nav';
import Subnav from './subnav';
import Newsletter from './newsletter/newsletter';

const Footer = () => (
	<Section>
		<div>
			<div>
				<Link to="/"><Logo/></Link>
				<Mobile>
					<Divider width="28px" color="white" centered={false} spacing="6px" thickness="1px"/>

					<Subnav>
						<li><a href={`mailto:${settings.email}`}>{settings.email}</a></li>
						<li><Link to="/privacy-policy">privacy policy</Link></li>
					</Subnav>
				</Mobile>
			</div>

			<div>
				<Nav>
					<li><Link to="/journal">Journal</Link></li>
					<li><a href={settings.social.github} target="_blank" rel="noopener noreferrer">Github</a></li>
					<li><a href={settings.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
					<li><a href={settings.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
				</Nav>

				<Desktop>
					<Subnav>
						<li><a href={`mailto:${settings.email}`}>{settings.email}</a></li>
						<li><Link to="/privacy-policy">privacy policy</Link></li>
					</Subnav>

					<Divider color="white" centered={false} spacing="20px" thickness="1px"/>
				</Desktop>
			</div>

			<div><Newsletter/></div>
		</div>
	</Section>
);

export default Footer;
