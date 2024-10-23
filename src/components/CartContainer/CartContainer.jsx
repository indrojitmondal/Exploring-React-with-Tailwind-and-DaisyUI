import React from 'react';
import './CartContainer.css'
import About from '../About/About';
import Cart from '../Cart/Cart';

const CartContainer = ({ handleIsActive, isActive }) => {
    const { cart } = isActive;
    console.log(cart);
    return (
        <div className=''>

            <div className='flex gap-10'>


                <div>

                    <button
                        onClick={() => { handleIsActive('cart') }}

                        className={` ${cart ? 'active' : 'primary'}`}

                    >Cart




                    </button>
                    {
                        cart?<Cart></Cart>: ''
                    }

                </div>


                <div>

                    <button
                        onClick={() => { handleIsActive('about') }}

                        className={` ${cart ? 'primary' : 'active'}`}
                    >About
                    </button>
                    {
                        cart? '' : <About></About>
                    }
                </div>


            </div>







        </div>

    );
};

export default CartContainer;