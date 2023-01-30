import React from 'react';
import CollectionsCard from '../CollectionsCard/CollectionsCard';
import FeatureBlog from '../FeatureBlog/FeatureBlog';
import HeroSection from '../HeroSection/HeroSection';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonial from '../Testimonial/Testimonial';
import TopSelling from '../TopSelling/TopSelling';
import UpComming from '../UpComming/UpComming';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TopSelling></TopSelling>
      <CollectionsCard></CollectionsCard>
      <UpComming></UpComming>
      <Testimonial></Testimonial>
      <FeatureBlog></FeatureBlog>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;