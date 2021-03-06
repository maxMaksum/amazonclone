import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {mockData2} from '../MockData/MockData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import CardContentWelcome from '../Card/CardContentWelcome';


const PreviousBtn = (props)=>{
  const {className, onClick} =props
  return(
    <div className={className} onClick ={onClick} className="left-0">
      <div className="glass3 relative  flex items-center justify-center  -left-0 absolute z-10 h-8 top-1/2 p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className=" left-0 absolute z-10 h-5 hover:animate-bounce  text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

const NextBtn = (props)=>{
  const {className, onClick, style} =props
  return(
    <div className={className} onClick ={onClick} className=" z-0 mx-0"  >
      <div className="glass3 relative  flex items-center justify-center  right-0 absolute z-10 h-8 top-1/2 p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="-right-0 absolute z-10  h-5 hover:animate-bounce text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

function NewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow:<PreviousBtn/>,
        nextArrow:<NextBtn/>,
        
      };

    return (
      
      <div className=" z-10 pl-2 pr-6 pb-8 pt-4 bg-green-500 relative overflow-hidden mb-4" style={{
        backgroundImage: `url("/linen3.jpg")`,
        }}>
        <Slider {...settings} className="w-full z-10">

          {mockData2.map((homedata) => (
            <div
              id={homedata.id}
              className="z-10 flex items-center justify-center h-100 w-full "
              style={{
                backgroundImage: `url("/linen3.jpg")`,
              }}
            >
              <div className=" z-10 flex flex-col sm:flex-row items-center justify-around h-100 md:h-full w-full relative glass2 p-8 mt-6">

                <div className=" flex items-center h:2/3 justify-around sm:w-2/3 md:h-1/4 z-10 ">
                  <MyImage url={homedata.image} className="w-full h-full" />
                </div>
                <CardContentWelcome
                  excerpt={homedata.excerpt}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </Slider>

        
          <div className="absolute bg-teal-500 z-0 w-28 h-28 sm:h-40  sm:w-40  rounded-full -right-10 -top-10"></div>
          <div className="absolute bg-teal-500 z-0 w-28 h-28 sm:h-40 sm:w-40 rounded-full -left-5 -bottom-5"></div>
        
      </div>
    );
}

export default NewSlider

function MyImage({url}){
  return(
    <div  className="h-full w-full">
        <img src={url} className="object-cover object-center z-0 h-full w-full"/>
    </div>
  )
}