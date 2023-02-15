import React, { useState } from 'react';
import "./DashProducts.css";

const DashProducts = () => {
  const [use, setUse] = useState();

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
            <th className='check_dash_field'>
                <input type="checkbox" name="" id='mainSelection' onClick={main} />
            </th>
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
          <tr>
            <td>
              <input type="checkbox" name="" className='selectAll' />
            </td>
            <td>
              Title1
            </td>
            <td>
              1
            </td>
            <td>
              Delete
            </td>
            <td>
              Go to tde file
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="" className='selectAll' />
            </td>
            <td>
              Title1
            </td>
            <td>
              1
            </td>
            <td>
              Delete
            </td>
            <td>
              Go to tde file
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="" className='selectAll' />
            </td>
            <td>
              Title1
            </td>
            <td>
              1
            </td>
            <td>
              Delete
            </td>
            <td>
              Go to tde file
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashProducts;