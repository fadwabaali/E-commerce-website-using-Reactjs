import React from 'react';
import BannerData from './BannerData';
import avatar from '../../images/banner.png';
import './Banner.css'

const Banner = () => {
  return <div>
      <BannerData 
      title={'10-Core CPU 16-Core GPU 16GB Unified Memory 1TB SSD Storage¹'}
      avatar= {avatar}
      initialPrice={'$2,699.00'}
      newPrice={'$1,699.00'}
      currentTime={300000} 
      />
  </div>;
};

export default Banner;
