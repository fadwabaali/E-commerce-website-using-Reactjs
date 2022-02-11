import React from 'react';
import './Services.css'

const Services = () => {
  return <>
  <section className='services__sec section'>
      <div className='container center '>
          <div className='services__content grid'>
          <div className='card'>
            <i className='bx card__icon bxs-truck'></i>
            <h3>Free Shipping Free For All Over Order $100.00</h3>
          </div>

          <div className='card '>
            <i className='bx card__icon bx-send'></i>
            <h3>Money Come Back 100% Money Back 30 Days</h3>
          </div>

          <div className='card'>
            <i className='bx card__icon bx-lock-alt'></i>
            <h3>24/7 Support Fast Services 24/7 Support</h3>
          </div>

          <div className='card '>
            <i className='bx card__icon bx-shield-alt-2'></i>
            <h3>Fast delivry Best Services For You</h3>
          </div>
          </div>
      </div>
  </section>
  </>;
};

export default Services;
