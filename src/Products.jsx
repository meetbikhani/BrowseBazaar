import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './products.css'
import List from './List'

const Products = () => {
  const catId = parseInt(useParams().id) ;
  const [maxPrice,setMaxPrice] = useState(1000) ;
  const [sort,setSort] = useState(null) ;
  useEffect(() => {
    // Scroll to the top of the outlet when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='products'>
      <div className='left-section'>
        <div className='filterItem'>
          <h2 className='text-xl font-medium mb-5'>Product Categories</h2>
          <div className='mb-1 ml-1'>
            <input className='mr-2' type='checkbox' id='1' value={1} />
            <label className=' text-lg' htmlFor='1'>Tshirt</label>
          </div>
          <div className='mb-1 ml-1'>
            <input className='mr-2' type='checkbox' id='2' value={2} />
            <label className=' text-lg' htmlFor='2'>Shirt</label>
          </div>
          <div className='mb-1 ml-1'>
            <input className='mr-2' type='checkbox' id='3' value={3} />
            <label className=' text-lg' htmlFor='3'>Jeans</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2 className='text-xl font-medium mb-5' >Filter by price</h2>
          <div className='flex gap-2'>
            <span>0</span>
            <input type='range' min={0} value={maxPrice} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2 className='text-xl font-medium mb-5'>Sort by Price</h2>
          <div className='mb-1 ml-1'>
            <input className='mr-2' type='radio' id='asc' value="asc" name='price' onChange={(e)=>setSort("asc")}/>
            <label className=' text-lg' htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='mb-1 ml-1'>
            <input className='mr-2' type='radio' id='desc' value="desc" name='price' onChange={(e)=>setSort("desc")}/>
            <label className=' text-lg' htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right-section'>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products