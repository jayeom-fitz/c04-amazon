import React from 'react'

import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868684220_.jpg'
                    alt=''
                />

                <div className='home__row'>
                    <Product 
                        id='1632724162'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                        price={29.99} rating={5}
                        image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg'
                    />
                    <Product 
                        id='1632727351'
                        title="COOKLEE Stand Mixer, 9.5 Qt. 660W 10+1 Speeds Electric Kitchen Mixer with Dishwasher-Safe Dough Hooks, Flat Beaters, Wire Whip & Pouring Shield Attach, White" 
                        price={169.99} rating={4}
                        image='https://m.media-amazon.com/images/I/71Z-vZyKy+S._AC_SL1500_.jpg'
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='1632727555'
                        title="SAMSUNG LC27F398FWNXZA SAMSUNG C27F398 27 Inch Curved LED Monitor" 
                        price={199.99} rating={4}
                        image='https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg'
                    />
                    <Product 
                        id='1632727755'
                        title="Certified Refurbished Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal" 
                        price={34.99} rating={4}
                        image='https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg'
                    />
                    <Product 
                        id='1632727973'
                        title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray" 
                        price={734.99} rating={5}
                        image='https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg'
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='1632728419'
                        title="Samsung Galaxy Z Fold 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Tablet 2-in-1 Foldable Dual Screen Under Display Camera 256GB Storage, Phantom Black" 
                        price={1799.99} rating={5}
                        image='https://m.media-amazon.com/images/I/71MFE2UY6-L._AC_UY218_.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
