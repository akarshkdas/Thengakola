import React from 'react';
import ProductList from '../components/ProductList';

const Skincare = () => (
    <div>
        <h1 style={{ color: 'darkcyan', textAlign: 'center' }}>Skin Care</h1>
        <ProductList category="skin" />
    </div>
);

export default Skincare;
