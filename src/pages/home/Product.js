import React from 'react'

import './Product.css'
import { useStateValue } from '../../StateProvider';

import StarIcon from '@material-ui/icons/Star';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, title, image, price, rating
            }
        })
    }

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
                        <StarIcon 
                            key={`${id}__${i}`}
                            className='product__star' 
                        />
                    ))}
                </div>
            </div>
            
            <img src={image} alt={title} />
            
            <button onClick={() => addToBasket()}>add to basket</button>
        </div>
    )
}

export default Product
