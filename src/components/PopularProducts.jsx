import React from 'react';
import ProductItem from './ProductItem';
import './PopularProducts.css';

const PopularProducts = () => {
    return (
        <div className='popular-container'>
            <h2 className='container pop-h2'>Popular products:</h2>
            <div className='container'>
                <div className='products-grid'>
                    <ProductItem/>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;