import React from 'react'
import './cart.css'
import { FaTrash } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Cart = () => {
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  return (
    <div className='cart-outside'>
        <div className='flex justify-between relative'>
          <h1 className=' text-[150%] font-semibold mb-5 px-4'>Products in your Cart</h1>
          <h1 className='absolute top-1 right-5 text-2xl cart_cross font-bold' >X</h1>
        </div>
        
        <div className='mb-5 px-4 flex gap-3 justify-between align-middle relative'>
          <img className='h-[12vh] w-[20%]' src='https://images.unsplash.com/photo-1710485886130-84811421b0dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <div>
            <h1 className='text-lg font-semibold'>Rose Gold</h1>
            <p className=' text-sm mb-5'>{text.slice(0, 100)+'...'}</p>
            <h1>1 X $15</h1>
            <FaTrash className=' absolute top-1 right-5 text-red-600 text-lg'/>
          </div>
        </div>
        <div className='mb-5 px-4 flex gap-3 justify-between align-middle relative'>
          <img className='h-[12vh] w-[20%]' src='https://images.unsplash.com/photo-1710485886130-84811421b0dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <div>
            <h1 className='text-lg font-semibold'>Rose Gold</h1>
            <p className=' text-sm mb-5'>{text.slice(0, 100)+'...'}</p>
            <h1>1 X $15</h1>
            <FaTrash className=' absolute top-1 right-5 text-red-600 text-lg'/>
          </div>
        </div>
        <div className='mb-5 px-4 flex gap-3 justify-between align-middle relative'>
          <img className='h-[12vh] w-[20%]' src='https://images.unsplash.com/photo-1710485886130-84811421b0dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <div>
            <h1 className='text-lg font-semibold'>Rose Gold</h1>
            <p className=' text-sm mb-5'>{text.slice(0, 100)+'...'}</p>
            <h1>1 X $15</h1>
            <FaTrash className=' absolute top-1 right-5 text-red-600 text-lg'/>
          </div>
        </div>
        <div className='bg-gray-200 px-4 py-2'>
            <div className='flex justify-between mb-2'>
                <h1 className='font-semibold px-1 text-[120%]'>SUBTOTAL</h1>
                <h1 className='font-semibold text-[120%] mr-10'>$100</h1>
            </div>
            <button className='bg-blue-500 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Proceed to Checkout</button>
            <br/>
            <button className= 'text-red-500 font-bold px-2'>Reset Cart</button>
        </div>
    </div>
  )
}

export default Cart;
