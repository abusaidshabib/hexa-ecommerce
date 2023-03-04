import React, { useContext } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import ProductCard from './ProductCard';
import './TopSelling.css';

const TopSelling = () => {

  const { products } = useContext(ApiDataContext)
  console.log(products);

  return (
    <div className='top_selling'>
      <h2 className='title1'>Top Selling Brand</h2>
      <div className='top_selling_grid'>
        {
          products.slice(0, 10).map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default TopSelling;