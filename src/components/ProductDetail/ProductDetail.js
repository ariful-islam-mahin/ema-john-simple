import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://immense-river-69781.herokuapp.com/product/' + productKey)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [productKey])

    return (
        <div>
            <h2>{productKey} Detail: </h2>
            {
                loading ? <p>loading...</p> : <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;