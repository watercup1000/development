import './App.css';
import DrinkItem from './DrinkItem.js';
import React, { useState } from 'react';


function DisplayList(props) {
    const [cartTotal, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const sortItems = (item) => {
        if (props.sortBy === "PriceAscending") {
            const numAscending = [...item].sort((a, b) => a.price - b.price);
            return numAscending
        } else if (props.sortBy === "PriceDescending") {
            const numDescending = [...item].sort((a, b) => b.price - a.price);
            return numDescending
        }
    }

    const filteredData = sortItems(props.list)
    
    return (
        <div className="DisplayList">
            <div id="items-div">
            <div id="drink-item">
                <h2>My Cart:</h2>
                <h3>Items:</h3>
                <ol>
                {cartItems.map(item => 
                    <li>{item}</li>)}
                </ol>
                <h3>Cart Total:</h3>
                <p>${cartTotal}</p>
            </div>
            <div id="items-div">
            {filteredData.map(item => 
            <DrinkItem item={item} cartTotal={cartTotal} updateTotal={setTotal} cartItems={cartItems} setCartItems={setCartItems}/> )}
            </div>
            </div>
        </div>
        
    );
}

export default DisplayList;