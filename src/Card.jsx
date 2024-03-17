import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className="card">
            <img className="product--image" src='https://images.unsplash.com/photo-1710447177159-c4ae694ba09b?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="product image" />
            <h2 className=' text-base	ml-5 mt-3 font-medium'>Carpet</h2>
            <div className='flex gap-3 ml-5'>
            <p className=" text-lg font-semibold line-through">$15</p>
            <p className=" text-lg font-bold">$10</p>
          </div>
            {/* <p>dfvv vvvv vvvv vvvvvv vvvvv vvbb bb bbbb ae sud gf aus bdf adub a ud hea ui wqd hwad uai hd fa ihfji ah fjdi au ue w ghau f</p> */}
        </div>
  )
}

export default Card