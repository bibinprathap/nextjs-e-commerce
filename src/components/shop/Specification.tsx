// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import { IProductAttributeGroup } from '~/interfaces/product';

interface Props {
    groups: IProductAttributeGroup[];
}

function Specification(props: Props) {
    const { groups } = props;

    return (
        <div className="spec">
            {groups.map((group, groupIndex) => (
                <div key={groupIndex} className="spec__section">
                    <h4 className="spec__section-title">{group.name}</h4>
                    {group.attributes.map((attribute, attributeIndex) => (
                        <div key={attributeIndex} className="spec__row">
                            <div className="spec__name">{attribute.name}</div>
                            <div className="spec__value">
                                {attribute.values.map((x) => x.name).join(', ')}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className="spec__disclaimer">
                <FormattedMessage id="TEXT_PRODUCT_DISCLAIMER" />
            </div>
        </div>
    );
}

export default Specification;
