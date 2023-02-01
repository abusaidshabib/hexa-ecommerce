import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import "./BlogHero.css";

const BlogHero = () => {
  const { blogs } = useContext(ApiDataContext);

  return (
    <div className='margin_blog'>
      <h3 className='main_title text_center'>Our update news</h3>
      <div className='blog_div'>
        {
          blogs.map(blog => (
            <div className='blog_sec'>
              <img src={blog.img} alt="" />
              <h1>{blog.title}</h1>
              <p>{blog.Description.slice(0, 130)}...</p>
              <Link className='read_more_btn' to="/">READ MORE</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BlogHero;