import React, { useState,useEffect }  from 'react';
import Clock from './Clock';

const BannerData = (props) => {
    const [countDays, setCountDays] = useState();
    const [countHours, setCountHours] = useState();
    const [countMins, setCountMins] = useState();
    const [countSec, setCountSec] = useState();

    let interval;

    const countDown = () => {
        const initialDate = new Date("May 12 ,2022").getTime();

        interval = setInterval(()=> {
            const now = new Date().getTime();

            const distance = initialDate - now;
            const days = Math.floor(
                distance / (24 * 60 * 60 * 1000)
            );
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60) 
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60) 
            );
            const secondes = Math.floor(
                (distance % (60 * 1000)) / (1000) 
            );

            if(distance <0){
                //Stop Timer
                clearInterval(interval.current)
            }else{
                //Update Timer
                setCountDays(days);
                setCountHours(hours);
                setCountMins(minutes);
                setCountSec(secondes);
            }
        })
    }
    
    useEffect(() => {
        countDown();
    });

  return <>
  <section className='banner__sec section'>
      <div className='center container'>
          <div className='banner__contents flex'>
              <div className='banner__img'>
                  <img src={props.avatar} alt={props.title} />
              </div>
              <div className='banner__data'>
                  <h2 className='sub__title'>{props.title}</h2>
                  <p className='price'>{props.newPrice} <span>{props.initialPrice} </span> </p>
                  <Clock 
                    countDays={countDays}
                    countHours={countHours}
                    countMins={countMins}
                    countSec={countSec}
                  />
              </div>
          </div>
      </div>
  </section>

  </>;
};

export default BannerData;
