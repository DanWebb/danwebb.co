import React from 'react';
import {Link} from 'react-static';
import settings from '../../theme/settings';
import Logo from '../logo/dw-logo';
import A, {InternalLink} from '../elements/a';
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
					<li><InternalLink to="/journal" color="white">Journal</InternalLink></li>
					<li><A href={settings.social.github} color="white" external>Github</A></li>
					<li><A href={settings.social.instagram} color="white" external>Instagram</A></li>
					<li><A href={settings.social.twitter} color="white" external>Twitter</A></li>
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
