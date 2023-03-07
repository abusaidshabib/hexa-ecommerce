import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  
  return (
    <Link to={`/product/${product._id}`} className="text-decoration-none">
      <div className='card_img_div'>
        <img src={product.thumbnail} alt="" />
      </div>
      <p className='card_title'>{product.title}</p>
      <p className='card_price'>${product.price}</p>
    </Link>
  );
};

export default ProductCard;