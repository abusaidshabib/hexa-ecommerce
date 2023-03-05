import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import CollectionsCard from '../CollectionsCard/CollectionsCard';
import FeatureBlog from '../FeatureBlog/FeatureBlog';
import HeroSection from '../HeroSection/HeroSection';
import NewArrival from '../NewArrival/NewArrival';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonial from '../Testimonial/Testimonial';
import TopSelling from '../TopSelling/TopSelling';
import UpComming from '../UpComming/UpComming';

const Home = () => {

  useTitle("Home")

  return (
    <div>
      <HeroSection></HeroSection>
      <TopSelling></TopSelling>
      <CollectionsCard></CollectionsCard>
      <UpComming></UpComming>
      <NewArrival></NewArrival>
      <Testimonial></Testimonial>
      <FeatureBlog></FeatureBlog>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;