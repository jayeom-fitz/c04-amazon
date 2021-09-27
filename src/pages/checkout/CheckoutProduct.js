import React from 'react'

import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';

import StarIcon from '@material-ui/icons/Star'

function CheckoutProduct({ product }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            id: product.id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                className='checkoutProduct__image' 
                src={product.image} 
            />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{product.title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <small>{product.price}</small>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(product.rating).fill().map((_, i) => (
                        <StarIcon 
                            key={`${product.id}__${i}`}
                            className='checkoutProduct__star' 
                        />
                    ))}
                </div>

                <button onClick={() => removeFromBasket()}
                >Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
