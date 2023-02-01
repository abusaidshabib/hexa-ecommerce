import React, { useContext } from 'react';
import "./FAQSection.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';

const FAQSection = () => {

  const { faq } = useContext(ApiDataContext)

  return (
    <div className='faq_section'>
      <h2 className='title2'>FAQs</h2>

      {
        faq.map(fa => (
          <div>
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
      {/* <div>
        <h1>How can I place an order on your website? <span>
          <AiOutlineMinus />
          <AiOutlinePlus />
        </span></h1>
        <p> You can place an order on our website by selecting the product you want, adding it to your cart, and proceeding to checkout. Fill in your shipping and payment information, and then submit your order.</p>
      </div> */}
    </div>
  );
};

export default FAQSection;