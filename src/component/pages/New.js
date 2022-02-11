import React from 'react';
import './New.css';
import header3 from '../../images/header3.png';
import header1 from '../../images/header1.png';

const New = () => {
  return <>
    <section className='new__sec section'>
        <div className='container'>
            <h2 className='title__sec'>Deal Of Days</h2>
            <div className='new__content grid'>
              <div className='card'>
                <div className='card__img'>
                  <img src={header3} alt={'produc1'} />
                </div>
                <div className='card__data'>
                  <span>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    </span>
                    <h2>
                      Apple iMac 27 pouces avec écran Retina 5K 3,8 GHz
                    </h2>
                    <h3>$1000.00 <span className='spec__price'>$100.00</span></h3>
                </div>
              </div>

              <div className='card'>
                <div className='card__img'>
                  <img src={header1} alt={'produc2'} />
                </div>
                <div className='card__data'>
                  <span>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    </span>
                    <h2>
                    Apple iMac 24"4.5K Retina;M1 8-CPU 8-Gpu; 8/512GB(Blue)
                    </h2>
                    <h3>$1000.00 <span className='spec__price'>$100.00</span></h3>
                </div>
              </div>

            </div>
        </div>
    </section>
  </>;
};

export default New;

