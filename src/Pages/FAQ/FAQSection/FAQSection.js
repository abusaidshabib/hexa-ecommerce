import React, { useContext } from 'react';
import "./FAQSection.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';

const FAQSection = () => {

  const { faq } = useContext(ApiDataContext)

  return (
    <div className='faq_section'>
      <h2 className='title1'>FAQs</h2>

      {
        faq.map(fa => (
          <div key={fa._id}>
            <h1 className='title3'>{fa.question}
            </h1>
            <p className='para2'>{fa.answer}</p>
          </div>
        ))
      }
    </div>
  );
};

export default FAQSection;