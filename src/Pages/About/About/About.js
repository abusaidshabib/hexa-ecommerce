import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import AboutHero from '../AboutHero/AboutHero';
import AboutOurBrands from '../AboutOurBrands/AboutOurBrands';
import AboutProducts from '../AboutProducts/AboutProducts';
import AboutSurprise from '../AboutSurprise/AboutSurprise';
import ProductVideo from '../ProductVideo/ProductVideo';
import SpecialFeatures from '../SpecialFeatures/SpecialFeatures';
import SurprisingProducts from '../SurprisingProducts/SurprisingProducts';

const About = () => {
  useTitle("About");

  return (
    <div>
      <AboutHero></AboutHero>
      <AboutProducts></AboutProducts>
      <ProductVideo></ProductVideo>
      <AboutOurBrands></AboutOurBrands>
      <SurprisingProducts></SurprisingProducts>
      <AboutSurprise></AboutSurprise>
      <SpecialFeatures></SpecialFeatures>
    </div>
  );
};

export default About;