import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../Redux/actions/productActions';
import ProductComponent from './ProductComponent';
import './product.css'
const ProductListining = () => {
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
  return <>
  <section className='product__sec section'>
    <div className='container center'>
      <div className='product__contents grid'>
        <ProductComponent/>
      </div>
    </div>
  </section>  
  </>;
};

export default ProductListining;
