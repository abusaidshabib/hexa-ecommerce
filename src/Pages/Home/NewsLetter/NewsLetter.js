import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='subscribe_div'>
      <div>
        <h1>Newsletter for the updates</h1>
        <p>For updates, sign up for the weekly status.</p>
        <div className='input_submit'>
          <input className='email_input' type="email" name="email" id="" />
          <input className='submit_btn' type="submit" value="submit" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;