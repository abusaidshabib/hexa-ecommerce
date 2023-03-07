import React, { useContext, useState } from 'react';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';
import "./DashProducts.css";

const DashProducts = () => {
  const [use, setUse] = useState();
  const { products } = useContext(ApiDataContext);

  const main = () => {
    const allSelection = document.getElementsByClassName("selectAll");
    const main = document.getElementById("mainSelection");
    if (main.checked === true) {
      for (let i = 0; i < allSelection.length; i++) {
        allSelection[i].checked = true;
      }
    }
    else {
      for (let i = 0; i < allSelection.length; i++) {
        allSelection[i].checked = false;
      }
    }
  }

  return (
    <div className='dash_products'>
      <table className='products_table'>
        <tbody>
          <tr>
            <th>
              Title
            </th>
            <th>
              Products
            </th>
            <th>
              Actions
            </th>
            <th>
              Go for files
            </th>
          </tr>
          {
            products.map(product =>
              <tr>
                <th>
                 {product.title}
                </th>
                <th>
                  {product.price}$
                </th>
                <th>
                  <button className='delete-dash'>Edit</button>
                </th>
                <th>
                  <button className='delete-dash'>Active</button>
                  <button className='desable-btn'>Disable</button>
                </th>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default DashProducts;