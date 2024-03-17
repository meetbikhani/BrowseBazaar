import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-evenly'>
        <Link to='/product/1'><Card /></Link>
        <Card />
        <Card />
        <Card />
        <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
    </div>
  )
}

export default List