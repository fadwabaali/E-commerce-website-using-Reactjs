import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Home from './Home';

import header1 from '../../images/header1.png'
import header2 from '../../images/header2.png'
import header3 from '../../images/header3.png'

function Slider(props) {
return<div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
        >
        <SwiperSlide>
            <Home
            title={'Apple iMac 24"4.5K Retina;M1 8-CPU 8-Gpu; 8/512GB(Blue)'} 
            descp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
            image={header1} />
        </SwiperSlide>
        <SwiperSlide>
            <Home 
            title={'Apple M1 chip 8-core 7-core GPU, 8-core GPU 16-core Neural Engine'} 
            descp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
            image={header2} />
        </SwiperSlide>
        <SwiperSlide>
            <Home 
            title={'iMac 27 pouces avec écran Retina 5K 3,8 GHz'} 
            descp={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
            image={header3} />
        </SwiperSlide>
      </Swiper>
  </div>
}

export default Slider;
