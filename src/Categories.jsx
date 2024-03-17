import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
    <h1 className='mt-10 text-4xl ml-5'>Shop By Categories</h1>
    <div className='outer'>
        <Link to='/products/1' className='inside'>
            <img className='image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg'></img>
            <h1 className='name'>Mens's Fashion</h1>
        </Link>
        <div className='inside'>
            <img className='image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg'></img>
            <h1 className='name'>Mens's Fashion</h1>
        </div>
        <div className='inside'>
            <img className='image' src='https://i.pinimg.com/564x/5a/bd/9e/5abd9e90488ab0a183fe42f144599c1f.jpg'></img>
            <h1 className='name'>Mens's Fashion</h1>
        </div>
        <div className='inside'>
            <img className='image' src='https://www.pngitem.com/pimgs/m/468-4682177_book-and-stationery-png-transparent-png.png'></img>
            <h1 className='name'>Mens's Fashion</h1>
        </div>
    </div>
    </>
  )
}

export default Categories