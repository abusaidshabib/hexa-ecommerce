import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';
import "./DashProducts.css";

const DashProducts = () => {
  const [use, setUse] = useState();
  const { products, setEdit, edit } = useContext(ApiDataContext);

  console.log(edit)
  

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
            products.map((product, id) =>
              <tr key={id}>
                <th>
                 {product.title}
                </th>
                <th>
                  {product.price}$
                </th>
                <th>
                  <Link className='delete-dash' onClick={() => setEdit(product)} to="/dashboard/product-edit" >Edit</Link>
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