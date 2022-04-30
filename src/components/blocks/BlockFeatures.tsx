// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import {
    Fi24Hours48Svg,
    FiFreeDelivery48Svg,
    FiPaymentSecurity48Svg,
    FiTag48Svg,
} from '~/svg';

export type IBlockFeaturesLayout = 'top-strip' | 'bottom-strip';

interface Props {
    layout: IBlockFeaturesLayout;
}

function BlockFeatures(props: Props) {
    const { layout } = props;

    return (
        <div className={`block block-features block-features--layout--${layout}`}>
            <div className="container">
                <ul className="block-features__list">
                    <li className="block-features__item">
                        <div className="block-features__item-icon">
                            <FiFreeDelivery48Svg />
                        </div>
                        <div className="block-features__item-info">
                            <div className="block-features__item-title">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE" />
                            </div>
                            <div className="block-features__item-subtitle">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE" />
                            </div>
                        </div>
                    </li>
                    <li className="block-features__item">
                        <div className="block-features__item-icon">
                            <Fi24Hours48Svg />
                        </div>
                        <div className="block-features__item-info">
                            <div className="block-features__item-title">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_TITLE" />
                            </div>
                            <div className="block-features__item-subtitle">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE" />
                            </div>
                        </div>
                    </li>
                    <li className="block-features__item">
                        <div className="block-features__item-icon">
                            <FiPaymentSecurity48Svg />
                        </div>
                        <div className="block-features__item-info">
                            <div className="block-features__item-title">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_TITLE" />
                            </div>
                            <div className="block-features__item-subtitle">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_SECURITY_SUBTITLE" />
                            </div>
                        </div>
                    </li>
                    <li className="block-features__item">
                        <div className="block-features__item-icon">
                            <FiTag48Svg />
                        </div>
                        <div className="block-features__item-info">
                            <div className="block-features__item-title">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE" />
                            </div>
                            <div className="block-features__item-subtitle">
                                <FormattedMessage id="TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(BlockFeatures);
