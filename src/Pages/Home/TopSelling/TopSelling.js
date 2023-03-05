import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import ProductCard from './ProductCard';
import './TopSelling.css';

const TopSelling = () => {

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
    <div className='top_selling'>
      <h2 className='title1'>Top Selling Brand</h2>
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
  );
};

export default TopSelling;