import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import './CollectionsCard.css';


const CollectionsCard = () => {

  const { collections } = useContext(ApiDataContext);



  return (
    <div className='card_collection'>
      {
        collections.map(collection => (<Link to={`/collection/${collection.title}`} key={collection._id} className="single_collection">
          <div className='collection_img'>
            <img src={collection.img} alt="" />
          </div>
          <div className='collection_content'>
            <h3 className='title2'>{collection.title}</h3>
            <p className='card_title'>{collection.description}</p>
          </div>
        </Link>))
      }
    </div>
  );
};

export default CollectionsCard;