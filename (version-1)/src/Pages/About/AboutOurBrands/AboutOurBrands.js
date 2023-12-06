import React from 'react';
import "./AboutOurBrands.css";

const collections = [
  {
    "id": 1,
    "title": "Harmony",
    "description": "Experience the ultimate performance",
    "img": "https://images.pexels.com/photos/1321290/pexels-photo-1321290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 2,
    "title": "Urban Oasis",
    "description": "Experience the ultimate performance",
    "img": "https://images.pexels.com/photos/940298/pexels-photo-940298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 3,
    "title": "Stand Lamb",
    "description": "Get UpTo 10% off.",
    "img": "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  }
]

const AboutOurBrands = () => {
  return (
    <div className='margin_bottom'>
      <div className='about_brands'>
        <h3 className='title1'>We believe that shopping should be convenient</h3>
        <p className='para1'>We are committed to providing our customers with a safe and secure shopping environment, and we take great pride in our ability to protect your personal information. We use cutting-edge technology to ensure that your transactions are protected, and we are constantly working to improve our security measures to give you peace of mind when you shop with us.</p>
      </div>
      <div className='card_collection'>
        {
          collections.map(collection => (<div key={collection.id} className="single_collection">
            <div className='collection_img'>
              <img src={collection.img} alt="" />
            </div>
            <div className='collection_content'>
              <h3 className='title2'>{collection.title}</h3>
              <p className='card_title'>{collection.description}</p>
            </div>
          </div>))
        }
      </div>
    </div>
  );
};

export default AboutOurBrands;