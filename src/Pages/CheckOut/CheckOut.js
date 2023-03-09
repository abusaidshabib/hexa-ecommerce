import React from 'react';
import ProductCard from '../Home/TopSelling/ProductCard';

const CheckOut = () => {

  const products = JSON.parse(window.localStorage.getItem('cart'))

  console.log(products[0]);

  return (
    <div className='checkout-div'>
      {
        products.map(product => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))
      }
    </div>
  );
};

export default CheckOut;