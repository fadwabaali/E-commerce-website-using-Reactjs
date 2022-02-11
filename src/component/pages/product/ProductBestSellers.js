import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../../../Redux/actions/productActions';
import { Link} from 'react-router-dom';
import './product.css';

const ProductBestSellers = () => {
  const products = useSelector((state) => state.allProducts.products);    
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products/category/electronics")
    .catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(setProducts(response.data));
    console.log('data', response.data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);  
  console.log("Products :", products);

  const randerProducts = products.filter((product)=>{
    const {rating} = product;
    return rating.rate >3;
  })

  const topProducts = randerProducts.map((product) => {
    const {id,image,title,price} = product;
    return randerProducts.length !== 0 ? (
      <div className='product__card' key={id}>
        <div className='product__img'>
          <img src={image} alt={title}/>
        </div>
        <div className='product__data'>
          <h3 className='sub__title'>{title} </h3>
          <p className='price'>price: {price}$</p>
          <Link to='./product-details' className='btn btn__spec'>Buy Now</Link>
        </div>
      </div>
  ) : <h1>We dont't Found Any Best Sellers </h1>
  })

  console.log(randerProducts)
  return <>
  <section className='best-sell__sec section'>
    <div className='container center'>
      <div className='best__content grid'>
      <div className='product__menu'>
        <h2 className='title__sec'>Best Seller</h2>
        <ul className='product__list'>
          <li><Link className='product__link' to='./product'>All</Link></li>
          <li><Link className='product__link' to='./'>Above 3.0</Link></li>
          <li><Link className='product__link' to='./product'>Above 4.0</Link></li>
          <li><Link className='product__link' to='./product'>Above 5.0</Link></li>
        </ul>
        <div className='buttons'>
          <Link to='./' className='btn btn__black'>View All</Link>
          <Link to='./' className='btn btn__black'>title </Link>
        </div>
      </div>
      <div className='grid best__product__content'>
        {topProducts}
      </div>
      </div>
    </div>
  </section>
      
  </>;
};

export default ProductBestSellers;
