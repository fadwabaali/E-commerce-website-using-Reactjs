import React from 'react';

const Clock = ({countDays,countHours,countMins,countSec}) => {
  return (
    <div className='count__down'>
    <div className='days'>
        <p className='num'>{countDays}</p>
        <p className='title'>DAYS</p>
    </div>
  
    <div className='hr'>
        <p className='num'>{countHours}</p>
        <p className='title'>HRS</p>
    </div>
    <div className='mn'>
        <p className='num'>{countMins}</p>
        <p className='title'>MINS</p>
    </div>
    <div className='sec'>
        <p className='num'>{countSec}</p>
        <p className='title'>SEC</p>
    </div>

  </div>
  );
};

Clock.defaultProps = {
    countDays:10,
    countHours:10,
    countMins:10,
    countSec:10
}

export default Clock;
