import React from 'react'

import './Product.css'

import StarIcon from '@material-ui/icons/Star';

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>

                <p className='product__price'>
                    <small>$</small>
                    <small>{price}</small>
                </p>

                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className='product__star' />
                    ))}
                </div>
            </div>
            
            <img src={image} alt={title} />
            
            <button>add to basket</button>
        </div>
    )
}

export default Product
