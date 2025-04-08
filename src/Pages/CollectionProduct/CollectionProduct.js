import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecialFeatures from '../About/SpecialFeatures/SpecialFeatures';
import ProductCard from '../Home/TopSelling/ProductCard';

const CollectionProduct = () => {
  const products = useLoaderData();


  return (
    <div className='top_selling'>
      <div className='top_selling_grid'>
        {
          products.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
      <SpecialFeatures></SpecialFeatures>
    </div>
  );
};

export default CollectionProduct;