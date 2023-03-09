import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Product.css";

const ProductTop = ({ productData }) => {

  const [amount, setAmount] = useState(1);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const storeData = [];

  const notLess = () => {
    if (amount >= 2) {
      setAmount(amount - 1)
    }

  }


  const addToCart = (items) => {
    const newData = {
      ...items, amount
    }

    let isPresent = false;
    cart.forEach((product) => {
      if (items._id === product._id)
        isPresent = true;
    })

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);

    }

    storeData.push(newData);
    localStorage.setItem("cart", JSON.stringify(storeData))
  }

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
          <button onClick={() => setAmount(amount + 1)}>+</button>
          <p className='quantity' onClick={() => notLess}>{amount}</p>
          <button onClick={notLess}>-</button>
        </div>
        <h1 className='title3'>Product Details</h1>
        <p className='para1'>{productData.description}</p>

        <div className='product_cart_btn-done'>
          <button className='add-to-cart' onClick={() => addToCart(productData)}>add to cart</button>
          <button className='buy-now'>buy it now</button>
        </div>
      </div>

    </div>
  );
};

export default ProductTop;