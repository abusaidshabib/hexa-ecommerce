import React, { useContext, useState } from 'react';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';

const ErrorPage = () => {

  const { products } = useContext(ApiDataContext);
  const [data, setData] = useState([])

  const newData = products.map(item => item.collection)

    function removeDuplicates(newData) {
        return newData.filter((item,
            index) => newData.indexOf(item) === index);
    }

    console.log(removeDuplicates(newData));

  return (
    <div>
      
    </div>
  );
};

export default ErrorPage;