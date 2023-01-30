import React, { useContext } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import './TopSelling.css';

const TopSelling = () => {

  const { products } = useContext(ApiDataContext)
  console.log(products);

  return (
    <div className='top_selling'>
      <h2 className='title2'>Top Selling Brand</h2>
      <div className='top_selling_grid'>
        {
          products.slice(0, 10).map(product => (
            <div>
              <div className='card_img_div'>
                <img src={product.images[1]} alt="" />
              </div>
              <p className='card_title'>{product.title}</p>
              <p className='card_price'>${product.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TopSelling;