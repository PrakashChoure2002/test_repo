import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComboProduct = () => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [discountPrice, setDiscountPrice] = useState(0);

    useEffect(() => {
        // Fetch items data from API
        axios.get('https://fakestoreapi.com/products')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    const handleItemSelect = (itemId) => {
        const selectedItem = items.find(item => item.id === itemId);
        const newSelectedItems = [...selectedItems, selectedItem];
        setSelectedItems(newSelectedItems);

        // Calculate discount price based on selected items
        const totalPrice = newSelectedItems.reduce((acc, item) => acc + item.price, 0);
        const discountPrice = calculateDiscountPrice(totalPrice);
        setDiscountPrice(discountPrice);
    };

    const calculateDiscountPrice = (totalPrice) => {
        // Calculate discount logic here (example: 10% discount)
        return totalPrice * 0.9;
    };

    const handleAddToCart = () => {
        // Example: Add selected items to cart using API
        axios.post('/', selectedItems)
            .then(response => {
                alert('Items added to cart successfully!');
                setSelectedItems([]);
                setDiscountPrice(0);
            })
            .catch(error => {
                alert('Failed to add items to cart. Please try again.');
                console.error('Error adding items to cart:', error);
            });
    };

    return (
        <div>
            <h2>Combo Products</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.id}
                                onChange={(e) => handleItemSelect(parseInt(e.target.value))}
                                checked={selectedItems.some(selectedItem => selectedItem.id === item.id)}
                            />
                            {item.name} - ${item.price}
                        </label>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${discountPrice.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ComboProduct;
