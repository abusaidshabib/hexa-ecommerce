import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Home/TopSelling/ProductCard';

const CollectionProduct = () => {
  const pathname = window.location.pathname;
  const collectionName = pathname.replace('/collection/', '');
  const products = useLoaderData();


  return (
    <div className='top_selling'>
      <h2 className='title2 text_captilize'>All products of {`${collectionName}`} Collection</h2>
      <div className='top_selling_grid'>
        {
          products.map(product => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default CollectionProduct;