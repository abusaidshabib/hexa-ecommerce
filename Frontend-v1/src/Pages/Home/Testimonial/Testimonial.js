import React from 'react';
import './Testimonial.css';
import person1 from "../../../assets/Person/person1.jpg";
import { BsStarFill } from "react-icons/bs";
import { useContext } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import Carousel from 'react-multi-carousel';

const Testimonial = () => {

  const { reviews } = useContext(ApiDataContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1800, min: 0 },
      items: 1,
    }
  };

  return (
    <div className='testimonial_div'>
      <h2 className='title1'>What our clients say</h2>
      <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        >
        {
          reviews.map(review =>
            <div className='testimonial_content' key={review._id}>
              <div>
                <img src={review.img} alt="" />
                <div className='ratings_testimonial'>
                  <BsStarFill className='icons_test' />
                  <BsStarFill className='icons_test' />
                  <BsStarFill className='icons_test' />
                  <BsStarFill className='icons_test' />
                </div>
                <p className='hero_para'>{review.review}</p>
                <p className='para2'> <b>- {review.name}</b></p>
              </div>
            </div>
          )
        }
      </Carousel>
    </div>
  );
};

export default Testimonial;