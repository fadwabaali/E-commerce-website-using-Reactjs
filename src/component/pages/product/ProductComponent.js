import React from 'react';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const randerList = products.map((product) =>{

        const {id,image,title,price} = product;
        return (
          <div className='product__card' key={id}>
            <Link to={`/product/${id}`} >
              <div className='product__img'>
                <img src={image} alt={title}/>
              </div>
              <div className='product__data'>
                <h3 className='sub__title'>{title} </h3>
                <p className='price'><span>$</span>{price}</p>
                <Link to='/products' className='btn btn__spec'>View More </Link>
              </div>
            </Link>
          </div>
        )});
    return<>
        {randerList}     
    </>

 
};

export default ProductComponent;
