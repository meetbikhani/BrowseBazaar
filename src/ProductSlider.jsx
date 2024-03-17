import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './productslider.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Card from './Card';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 6
  },
  desktop2: {
    breakpoint: { max: 2000, min: 1700 },
    items: 5
  },
  desktop3: {
    breakpoint: { max: 1700, min: 1350 },
    items: 4
  },
  desktop4: {
    breakpoint: { max: 1350, min: 1030 },
    items: 3
  },
  desktop5: {
    breakpoint: { max: 1030, min:670 },
    items: 2
  },
  desktop6: {
    breakpoint: { max: 670, min:0 },
    items: 1
  },
};

const ProductSlider = ({title}) => {
  return (
    <>
      <h1 className='mt-10 text-4xl ml-5'>{title}</h1>
      <Carousel 
        swipeable={true} 
        draggable={true} 
        responsive={responsive} 
        className='mt-10'
        arrows={false}
        customButtonGroup={<CustomButtonGroup />}
      >
          
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </>
  );
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <>
    <div className="custom-button-group-left">
      <button className="custom-arrow-button" onClick={() => previous()}>
      <GrFormPrevious className=' h-8 w-8'/>
      </button>
    </div>
    <div className="custom-button-group-right">
      <button className="custom-arrow-button" onClick={() => next()}>
      <MdNavigateNext className=' h-8 w-8' />
      </button>
    </div>
    </>
  );
};

export default ProductSlider;
