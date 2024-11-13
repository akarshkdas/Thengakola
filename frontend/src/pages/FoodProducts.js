import React from 'react';
import ProductList from '../components/ProductList';

const FoodProducts = () => (
    <div>
        <h1 style={{ color: 'darkcyan', textAlign: 'center' }}>Food Products</h1>
        <ProductList category="food" />
    </div>
);

export default FoodProducts;
