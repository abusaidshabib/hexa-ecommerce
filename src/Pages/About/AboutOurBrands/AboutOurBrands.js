import React from 'react';
import "./AboutOurBrands.css";

const collections = [
  {
    "id": 1,
    "title": "Android",
    "description": "Empower your Life.",
    "img": "https://images.unsplash.com/photo-1612442443556-09b5b309e637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id": 2,
    "title": "Beauty Products",
    "description": "Uncover Your Radiant Glow.",
    "img": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  },
  {
    "id": 3,
    "title": "Stand Lamb",
    "description": "Get UpTo 10% off.",
    "img": "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    "id": 4,
    "title": "Sndy Perfume",
    "description": "Get 40% off Per Product",
    "img": "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
  },
  {
    "id": 5,
    "title": "Brand New Laptop",
    "description": "Experience the ultimate performance",
    "img": "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

const AboutOurBrands = () => {
  return (
    <div className='margin_bottom'>
      <div className='about_brands'>
        <h3 className='title2'>We believe that shopping should be convenient</h3>
        <p className='test_des'>We are committed to providing our customers with a safe and secure shopping environment, and we take great pride in our ability to protect your personal information. We use cutting-edge technology to ensure that your transactions are protected, and we are constantly working to improve our security measures to give you peace of mind when you shop with us.</p>
      </div>
      <div className='card_collection'>
        {
          collections.slice(0,3).map(collection => (<div className="single_collection">
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