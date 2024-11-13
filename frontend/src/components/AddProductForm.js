import React, { useState } from 'react';
import { addProduct } from '../services/api';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        category: 'handcrafts', // Default to "handcrafts" category
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        alert('Product added successfully');
        setProduct({ name: '', price: '', imageUrl: '', category: 'handcrafts' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
            <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Image URL" />
            <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
