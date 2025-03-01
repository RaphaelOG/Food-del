import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text"  placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text"  placeholder='City'/>
          <input type="text" placeholder='State' />
          <div className="multi-fields">
          <input type="text"  placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone Number'/>
        </div>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total:</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder