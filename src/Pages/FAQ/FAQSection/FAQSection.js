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
            <h1>{fa.question}
              <span>
                <AiOutlineMinus />
                <AiOutlinePlus />
              </span>
            </h1>
            <p>{fa.answer}</p>
          </div>
        ))
      }
    </div>
  );
};

export default FAQSection;