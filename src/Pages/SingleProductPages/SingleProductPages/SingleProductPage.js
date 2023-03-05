import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductTop from '../ProductTop/ProductTop';
import "./SingleProductPage.css";

const SingleProductPage = () => {

  const productData = useLoaderData();

  return (
    <div>
      <ProductTop productData={productData}></ProductTop>
    </div>
  );
};

export default SingleProductPage;