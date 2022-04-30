// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import { ILink } from '~/interfaces/link';

interface Props extends React.HTMLAttributes<HTMLElement> {
    header: React.ReactNode;
    links: ILink[];
}

function FooterLinks(props: Props) {
    const { header, links } = props;

    return (
        <div className="footer-links">
            <h5 className="footer-links__title">{header}</h5>
            <ul className="footer-links__list">
                {links.map((link, index) => (
                    <li key={index} className="footer-links__item">
                        <AppLink href={link.url} className="footer-links__link">{link.title}</AppLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinks;
