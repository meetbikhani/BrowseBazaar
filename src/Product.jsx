import React, { useEffect, useState } from 'react';
import './product.css';
import ProductSlider from './ProductSlider';
import { LuShoppingCart } from "react-icons/lu";

const Product = () => {
  useEffect(() => {
    // Scroll to the top of the outlet when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);
  const [quantity, setQuantity] = useState(1);
  
  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(prevQuantity => prevQuantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  return (
    <>
    <div className='lg:flex lg:flex-row h-auto w-[100%]  overflow-hidden lg:gap-10 lg:justify-evenly'>
      <div className='product-left'>
        <img className='h-[100%] w-[100%]' src='https://images.unsplash.com/photo-1710403690356-e651c9730491?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='product'></img>
      </div>
      <div className='product-right'>
        <h1 className='text-5xl font-semibold mb-10'>Airdopes 131</h1>
        <p className='text-lg mb-10'>Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case</p>
        <div className='flex gap-8 mb-10'>
          <span className='text-2xl font-semibold line-through'>$50</span>
          <span className='text-2xl font-semibold'>$30</span>
        </div>
        <div className='mb-10 flex gap-4'>
          <button className='bg-gray-500 text-white font-bold w-[25px] text-xl' onClick={decrementQuantity}>-</button>
          <span className='text-xl border-gray-500'>{quantity}</span>
          <button className='bg-gray-500 text-white font-bold w-[25px] text-xl' onClick={incrementQuantity}>+</button>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 flex gap-2 justify-center text-white font-bold py-2 px-4 rounded-full w-[200px] relative'>
          <LuShoppingCart className='w-[22px] h-[22px] fill-current text-white' />
          <span className='ml-2'>Add to Cart</span>
        </button>
      </div>
    </div>
    <ProductSlider title={"Related Products"} />
    </>
  );
};

export default Product;
