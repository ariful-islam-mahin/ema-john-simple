import React from 'react';
import '../Product/Product.css'

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reveiwItemStyle = {
        padding:'10px',
        borderBottom:'1px solid gray',
        marginLeft:'100px'
    }
    return (
        <div style={reveiwItemStyle}>
            <h3 className='product-name'>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;