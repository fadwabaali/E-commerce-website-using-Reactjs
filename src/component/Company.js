import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'

import './Company.css'

// import required modules
import { Navigation } from "swiper";

const data = [
    {
        id:1,
        Company: logo1
    },
    {
        id:2,
        Company: logo2
    },
    {
        id:3,
        Company: logo3
    },
    {
        id:4,
        Company: logo4
    },
    {
        id:5,
        Company: logo5
    },
    {
        id:6,
        Company: logo6
    }
]

const Company = () => {
    const width =  window.innerWidth;
  return <>
  <section className='section company__sec'>
      <div className=' container center flex'>
        <Swiper 
        navigation={true}
        loop={true}
        slidesPerView={width <= 600? 1 : 3}
        spaceBetween={20}
        //slidesPerGroup={3} 
        modules={[Navigation]} 
        className="mySwiper center company__contents">

            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className='center company__img'>
                        <img src={item.Company} alt={item.id} />
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
      </div>

  </section>
  
  </>;
};

export default Company;
