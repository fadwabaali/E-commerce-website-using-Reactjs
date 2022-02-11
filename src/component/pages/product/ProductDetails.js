import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../../../Redux/actions/productActions';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image,id, title, price, description } = product;
  const dispatch = useDispatch();
  console.log(productId);
  
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  const [value, setValue] = useState(1);


console.log("Product :", product);
console.log('value', value)

  return <>
  <section className='product-details__sec section'>
    <div className='product-details__contents container center'>
      {Object.keys(product).length === 0?(
        <h1>Loading... </h1>
      ): (
      <div className='product-details__card grid' key={id}>
        <div className="product-details__img">
          <img src={image} alt={title}/>
        </div>
        <div className="product-detail__data">
          <h3 className="title__sec">{title}</h3>
          <p className="price">Price: <span>${price}</span> </p>
          <select className="product-select__item">
            <option value="">Select Size</option>
            <option value="">XXL</option>
            <option value="">XL</option>
            <option value="">Large</option>
            <option value="">Medium</option>
            <option value="">Small</option>
          </select>
          <div className="product__cart">
            <input type="number" className="num__product" value={value} onChange={e =>setValue(e.target.value) } />
            <button type="submit" className="btn btn__spec">Add To Cart</button>
          </div>
          <h2 className="title__sec">Products Details <span><i className='bx bx-right-indent'></i></span></h2>
          <p className="desc">
              {description}
          </p>
        </div>
      </div>
        )}
    </div>
  </section>
     
  </>;
};

export default ProductDetails;
