import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import Title from './Title'

const CardTotal = () => {

  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
 
 
  return (
    <div className='w-full'>
      <div className='tex-2xl '>
      < Title text1={"CARD"} text2={"TOTALS"} />  
      </div> 
      <div className='flex flex-col gap-2 mt-2 tex-sm'>
        <div className='flex justify-between'>
          <p>Subtotal:</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Delivery Fee:</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between font-bold '>
          <p>Total:</p>
          <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
        
       
      </div>

    </div>
  )
}

export default CardTotal