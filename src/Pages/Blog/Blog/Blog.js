import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import BlogHero from '../BlogHero/BlogHero';

const Blog = () => {
  useTitle("Blog");

  return (
    <div>
      <BlogHero></BlogHero>
    </div>
  );
};

export default Blog;