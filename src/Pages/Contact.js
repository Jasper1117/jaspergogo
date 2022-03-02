import React from 'react';
import ContactElement from '../components/Contact/ContactElement';
import ContactForm2 from '../components/Contact/ContactForm';
import ContactNav from '../components/Contact/ContactNav';
import FooterCon from '../components/Footer/FooterCon';

const Contact = () => {
  return <div id="contact">
    <ContactNav/>
    <ContactElement/>
    <FooterCon/>
  </div>;
};

export default Contact;
