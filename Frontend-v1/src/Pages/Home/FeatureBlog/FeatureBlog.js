import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import "./FeatureBlog.css";

const FeatureBlog = () => {
  const { blogs } = useContext(ApiDataContext)

  return (
    <div className='feature_blog'>
      <h1 className='title1'>Featured news Blogs</h1>
      <div className='blog_div'>
        {
          blogs.slice(0, 3).map(blog => (
            <div key={blog._id} className='blog_sec'>
              <img src={blog.img} alt="" />
              <h1 className='title3'>{blog.title}</h1>
              <p className='para3'>{blog.Description.slice(0, 100)}...</p>
              <Link className='read_more_btn' to="/">READ MORE</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FeatureBlog;