// react
import React from 'react';

function WidgetNewsletter() {
    return (
        <div className="widget widget-newsletter">
            <div className="widget-newsletter__title">
                <h4>Newsletter</h4>
            </div>
            <div className="widget-newsletter__form">
                <form action="">
                    <div className="widget-newsletter__text">
                        Enter your email address below to subscribe to our newsletter
                        and keep up to date with the latest news, discounts and special offers.
                    </div>
                    <input type="text" className="widget-newsletter__email" placeholder="Email Address..." />
                    <button type="button" className="widget-newsletter__button">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default WidgetNewsletter;
