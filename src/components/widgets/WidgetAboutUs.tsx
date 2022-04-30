// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
// data
import theme from '~/data/theme';

function WidgetAboutUs() {
    const socialLinks = [
        { name: 'rss', icon: 'fas fa-rss', url: theme.author.profile_url },
        { name: 'youtube', icon: 'fab fa-youtube', url: theme.author.profile_url },
        { name: 'facebook', icon: 'fab fa-facebook-f', url: "https://www.facebook.com/Royalautopartsmarket-100676728611277" },
        { name: 'twitter', icon: 'fab fa-twitter', url: "https://twitter.com/royalautoparts1" },
        { name: 'instagram', icon: 'fab fa-instagram', url: theme.author.profile_url },
    ];

    return (
        <div className="card widget widget-about-us">
            <div className="widget__header">
                <h4>About Blog</h4>
            </div>
            <div className="widget-about-us__body">
                <div className="widget-about-us__text">
                    If You want to keep your car in good order and safe to drive ,
                    it helps to know something about how it works. The main components of a care are : the body (the outer shell), the chassis, ( the supporting structure of the car)
                    the engin(motot), the transmission system( for changing speed),
                    the steering system, brakes, wheels( the tyres and rims) along with other essential
  and non-essential parts.                 </div>
                <div className="widget-about-us__social-links social-links">
                    <ul className="social-links__list">
                        {socialLinks.map((socialLink, index) => (
                            <li key={index} className={`social-links__item social-links__item--${socialLink.name}`}>
                                <AppLink href={socialLink.url} target=" _blank">
                                    <i className={`widget-social__icon ${socialLink.icon}`} />
                                </AppLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WidgetAboutUs;
