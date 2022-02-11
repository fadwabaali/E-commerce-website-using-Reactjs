import React,{useState} from 'react';
import {
  Link
} from "react-router-dom";
import './Navbar.css' 


function Navbar() {
  const [click,setClick]= useState(true);
  const [dark,setDark] = useState(false);

  const darkHandler = () => setDark(!dark);
  
  const menuOppen = () => setClick(!click);

  const body = document.querySelector('body');
  let attr = body.getAttribute('class')

  if(dark){
    body.classList.add('dark')
    console.log(attr);
  }else{
    body.classList.remove('dark')
  }

  return <>
  <header>
  <nav className='container flex' >
      <div className='logo__sec'>
          <Link to='/'><h1>E-MartBD</h1></Link>
      </div>
      <div onClick={menuOppen} className={click ? 'navigation center' : 'navigation center open__nav'}>
          <ul className='nav__list'>
            <li className='nav__item'><Link className='nav__link' to="/">Home</Link></li>
            <li className='nav__item'><Link className='nav__link' to="/product">Products</Link></li>
            <li className='nav__item'><Link className='nav__link' to="/BestSells">Best Sells</Link></li>
            <li className='nav__item'><Link className='nav__link' to="/NewProduct">New</Link></li>
            <li className='nav__item'><Link className='nav__link' to="/Contact">Contact</Link></li>
          </ul>

          <div className='search__input'>
            <input type={"text"} className='input__search' placeholder='Searching!'/>
            <i className='bx bx-search search__icon'></i>
          </div>

          <ul className='nav__icons' onClick={darkHandler}>
            <li><i className='bx bx-cart' ></i></li>
            <li><i className='bx bxs-map'></i></li>
            <li><i className='bx bx-world'></i></li>
            <li><i className={dark? 'bx bx-sun' :'bx bx-moon'} ></i></li>      
          </ul>
         

      </div>
      <div className='menu__toggler' onClick={menuOppen}>
        <i className={click? 'bx bx-menu-alt-right' :'bx bx-x'} ></i>
      </div>
  </nav>
  </header>


  </>;
}

export default Navbar;
