import React from 'react';
import useTitle from '../../../hook/UseTitle/UseTitle';
import ContactForm from '../ContactForm/ContactForm';
import ContactHero from '../ContactHero/ContactHero';
import ContactImg from '../ContactImg/ContactImg';

const Contact = () => {

  useTitle("Contact with")

  return (
    <div>
      <ContactHero></ContactHero>
      <ContactForm></ContactForm>
      <ContactImg></ContactImg>
    </div>
  );
};

export default Contact;