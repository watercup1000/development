import React, { useState } from 'react';


function DrinkItem(props) {
    const [inCart, setInCart] = useState(false);
    const [buttonText, setButtonText] = useState("Add to Cart");

    const item = props.item
    const cartTotal = props.cartTotal

    const filterCart = (val) => {
        if (val === item.name) {
             return false
        } else {
         return true
        }
     };

    const handleClick = (event) => { 
        if (!inCart) {
        props.updateTotal(cartTotal + item.price);
        setInCart(true)
        props.setCartItems([...props.cartItems, 
            props.item.name])
        setButtonText("Remove from Cart");
    } else {
        props.updateTotal(cartTotal - item.price);
        setInCart(false)
        //i need to figure out a way to remove the item name from the cart right here
        props.setCartItems(props.cartItems.filter(filterCart))
        setButtonText("Add to Cart");
    }
    }

    return (
        <div id="drink-item">
            <p id="drink-title"><b>Drink:</b> {props.item.name}</p>
            <p id="drink-title"><b>Type:</b> {props.item.type}</p>
            <p id="drink-title"><b>Price</b>: {props.item.price}</p>
            <img src={props.item.img} />
            <button className="button-2" onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

export default DrinkItem;
