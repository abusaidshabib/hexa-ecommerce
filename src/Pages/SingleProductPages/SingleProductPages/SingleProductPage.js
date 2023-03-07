import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { useLoaderData } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import CollectionsCard from '../../Home/CollectionsCard/CollectionsCard';
import ProductCard from '../../Home/TopSelling/ProductCard';
import ProductTop from '../ProductTop/ProductTop';
import "./SingleProductPage.css";

const SingleProductPage = () => {

  const productData = useLoaderData();
  const { products } = useContext(ApiDataContext)
  console.log(products);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (
    <div className='single-product-div'>
      <ProductTop productData={productData}></ProductTop>

      <h1 className='title1 reco_title'>Recommended Product</h1>

      <div className='extra-product-gap'>
        <Carousel className='top_selling_grid'
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
        >
          {
            products.slice(0, 10).map(product => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          }
        </Carousel>
      </div>

      <h1 className='title1 reco_title'>Recommended Collection</h1>
      <CollectionsCard></CollectionsCard>
    </div>
  );
};

export default SingleProductPage;