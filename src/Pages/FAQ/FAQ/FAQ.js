import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import FAQHero from '../FAQHero/FAQHero';
import FAQSection from '../FAQSection/FAQSection';

const FAQ = () => {
  useTitle("FAQ of")
  
  return (
    <div>
      <FAQHero></FAQHero>
      <FAQSection></FAQSection>
    </div>
  );
};

export default FAQ;