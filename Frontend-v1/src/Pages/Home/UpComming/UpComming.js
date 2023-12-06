import React from 'react';
import video1 from '../../../assets/Videos/HomeAdver.mp4';
import "./UpComming.css";

const UpComming = () => {
  return (
    <div className='up_Coming'>
      <video src={video1} autoPlay loop muted />
      <div className='up_coming_content'>
        <h1 className='extra_large_title'>Our upcoming updates</h1>
      </div>
    </div>
  );
};

export default UpComming;