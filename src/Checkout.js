import React from 'react'

import './Checkout.css'

function Checkout() {
    return (
        <div className='checkout' >
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_960_720.jpg'
                    alt=''
                />

                <div>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                </div>
            </div>

            <div className='checkout__right'>
                <h2>subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
