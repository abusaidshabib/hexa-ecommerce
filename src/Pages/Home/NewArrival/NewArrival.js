import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import ProductCard from '../TopSelling/ProductCard';
import "./NewArrival.css";

const NewArrival = () => {

  const {products} = useContext(ApiDataContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1399},
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 912 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 913, min: 464 },
      items: 1
    }
  };


  return (
    <div className='new_arrive'>
      <div>
        <p className='title1'>New arrival product</p>
        <p className='hero_para'>Our products range from chic wall art and decorative accents to luxurious textiles and furniture. Whether you're looking to add a pop of color or a touch of elegance, we have something for every taste and budget.</p>
      </div>
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

export default NewArrival;