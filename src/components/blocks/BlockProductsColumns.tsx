// react
import React from 'react';
// application
import ProductCard from '~/components/shared/ProductCard';
import { IProduct } from '~/interfaces/product';

export interface IBlockProductsColumnsItem {
    title: string;
    products: IProduct[];
}

interface Props {
    columns: IBlockProductsColumnsItem[];
}

function BlockProductsColumns(props: Props) {
    const { columns } = props;

    return (
        <div className="block block-products-columns">
            <div className="container">
                <div className="row">
                    {columns.map((column, columnIdx) => (
                        <div key={columnIdx} className="col-4">
                            <div className="block-products-columns__title">{column.title}</div>
                            <div className="block-products-columns__list">
                                {column.products.map((product) => (
                                    <div key={product.id} className="block-products-columns__list-item">
                                        <ProductCard
                                            product={product}
                                            exclude={['actions', 'status-badge', 'features', 'buttons', 'meta']}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockProductsColumns);
