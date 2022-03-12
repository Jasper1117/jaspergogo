import React from 'react';
import ContactElement from '../components/Contact/ContactElement';
import ContactForm2 from '../components/Contact/ContactForm';
import ContactNav from '../components/Contact/ContactNav';
import ContactFooter from '../components/Contact_footer/ContactFooterCon';


const Contact = () => {
  return <div id="contact">
    <ContactNav/>
    <ContactElement/>
    <ContactFooter/>
  </div>;
};

export default Contact;
