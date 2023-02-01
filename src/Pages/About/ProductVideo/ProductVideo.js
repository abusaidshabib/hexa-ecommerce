import React from 'react';
import video1 from "../../../assets/Laptop Commercial.mp4";

const ProductVideo = () => {
  return (
    <div className='up_Coming'>
      <video src={video1} autoPlay loop muted />
      <div className='up_coming_content'>
        <h1 className='main_title'>Taking cares of our customers</h1>
      </div>
    </div>
  );
};

export default ProductVideo;