import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return <>
    <footer className='footer__sec section'>
      <div className='container center'>
        <div className='footer__contents flex'>
          <div className='title'>
            <h1 className='title__sec'>E-MartBD</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <ul className='footer__list'>
            <li><h2 className='footer__title'>About</h2> </li>
            <li><p>About Us</p></li>
            <li><p>Features</p></li>
            <li><p>News</p></li>
            <li><p>Company</p></li>
          </ul>

          <ul className='footer__list'>
            <li><h2 className='footer__title'>Company</h2> </li>
            <li><p>Our Team</p></li>
            <li><p>Preview</p></li>
            <li><p>FAQ</p></li>
            <li><p>Blog</p></li>
          </ul>

          <ul className='footer__list'>
            <li><h2 className='footer__title'>Support</h2> </li>
            <li><p>About Us</p></li>
            <li><p>Support</p></li>
            <li><p>Contact Us</p></li>
            <li><p>Company</p></li>
          </ul>

          <div className='contact__sec'>
            <h2 className='footer__title'><span className='bold'>Subscribe</span> To Get The Leatest News About Us</h2>
            <div className='input flex'>
              <input type='email' placeholder='Type Something...' />
              <Link to='./' className='btn btn__contact'> Subscribe </Link>
            </div>
          </div>



        </div>
      </div>
    </footer>
  </>;
};

export default Footer;
