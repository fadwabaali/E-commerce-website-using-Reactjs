import React from 'react';
import {
  Link
} from "react-router-dom";
import './Home.css';
import '../../App.css';

function Home(props) {
  return <>
    <section className='home__sec'>
      <div className='home__content center flex container'>
        <div className='home__data'>
          <h2 className='title__sec'>{props.title}</h2>
          <p>{props.descp}</p>
          <Link to='./ProductDetails' className='btn btn__spec' >Buy Now</Link>
        </div>
        <div className='home__img'>
            <img src={props.image} alt={props.title} />
        </div>
      </div>
    </section>
  </>;
}

export default Home;
