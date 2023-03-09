import React from 'react';
import { Link } from 'react-router-dom';
import "./CheckOut.css";

const CheckOut = () => {

  const products = JSON.parse(window.localStorage.getItem("cart"))

  return (
    <div className='checkout-div'>
      <h1 className='title1'>Pay and enjoy the product</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
        {
          products?.map(product =>
            <tr>
              <th>{product.title}</th>
              <th>{product.price}$</th>
              <th>{product.amount}</th>
              <th>
                <Link to="" className='btn_type1'>PAY</Link>
              </th>
            </tr>
          )
        }
      </table>
    </div>
  );
};

export default CheckOut;