import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';
import "./CheckOut.css";

const CheckOut = () => {

  const { setPayFor } = useContext(ApiDataContext);
  const products = JSON.parse(window.localStorage.getItem("newCart"))

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
            <tr key={product._id}>
              <th>{product.title}</th>
              <th>{product.price}$</th>
              <th>{product.amount}</th>
              <th>
                <Link to={`/dashboard/payment/${product._id}`} className='btn_type1' onClick={() => setPayFor(product)}>PAY</Link>
              </th>
            </tr>
          )
        }
      </table>
    </div>
  );
};

export default CheckOut;