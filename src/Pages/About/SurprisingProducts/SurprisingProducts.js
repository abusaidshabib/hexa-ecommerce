import React from 'react';
import "./SurprisingProducts.css";
import surprise1 from "../../../assets/Surprice1.jpg";
import surprise2 from "../../../assets/Surprice2.jpg";

const SurprisingProducts = () => {
  return (
    <div className='surprise_prod'>
      <h3 className='title1 extra_gaps'>Some surprising attachment with some amazing products</h3>
      <div className='img_surprise'>
        <div className='img1_sur_back'>
        </div>
        <img className='img1_sur' src={surprise1} alt="" />
        <div className='img2_sur_back'>
        </div>
        <img className='img2_sur' src={surprise2} alt="" />
      </div>
    </div>
  );
};

export default SurprisingProducts;