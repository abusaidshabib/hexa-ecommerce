import React from 'react';
import "./SpecialFeatures.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { MdOutlineGppGood } from "react-icons/md";

const SpecialFeatures = () => {
  return (
    <div className="SpecialFeature_div">
      <div>
        <MdOutlineDeliveryDining className='feature_icons'/>
        <p><b>Fast Shipping</b></p>
      </div>
      <div>
        <BsCurrencyDollar className='feature_icons'/>
        <p><b>Shop With Confidence</b></p>
      </div>
      <div>
        <FcLike className='feature_icons'/>
        <p><b>Different Choice</b></p>
      </div>
      <div>
        <MdOutlineGppGood className='feature_icons'/>
        <p><b>Successful</b></p>
      </div>
    </div>
  );
};

export default SpecialFeatures;