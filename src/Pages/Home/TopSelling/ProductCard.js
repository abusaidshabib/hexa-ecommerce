import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='card_img_div'>
        <img src={product.thumbnail} alt="" />
      </div>
      <p className='card_title'>{product.title}</p>
      <p className='card_price'>${product.price}</p>
    </div>
  );
};

export default ProductCard;