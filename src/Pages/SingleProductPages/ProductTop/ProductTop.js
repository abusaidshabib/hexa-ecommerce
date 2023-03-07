import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Product.css";

const ProductTop = ({ productData }) => {

  const [quantity, setQuantity] = useState(0);

  const notLess = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1)
    }

  }

  console.log(productData);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='new_arrive'>
      <Carousel
        className='single-pro-caro'
        responsive={responsive}
        infinite={true}
      >
        {
          productData.images.map((product, id) =>
            <div className='single_img_div' key={id}>
              <img src={product} alt="" />
            </div>
          )
        }
      </Carousel>
      <div className='product-details'>
        <h1 className='title1'>{productData.title}</h1>
        <h1 className='price'>{productData.price}$<span>

        </span></h1>
        <p className='sub-text'>Tax included</p>
        <div className='quantity_select'>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
          <p className='quantity' onClick={() => notLess}>{quantity}</p>
          <button onClick={notLess}>-</button>
        </div>
        <h1 className='title3'>Product Details</h1>
        <p className='para1'>{productData.description}</p>

        <div className='product_cart_btn-done'>
          <button className='add-to-cart'>add to cart</button>
          <button className='buy-now'>buy it now</button>
        </div>
      </div>

    </div>
  );
};

export default ProductTop;