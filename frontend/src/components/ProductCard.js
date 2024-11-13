import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <h2>Rs. {product.price}</h2>
    </div>
);

export default ProductCard;
