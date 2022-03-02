import React from 'react';
import styled from 'styled-components';
import ContactForm2 from './ContactForm';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactElement = () => {
  return <ContactStyled>
      <div className="ContactTop">
        <h1>Contact ME</h1>
        <p>Want to get in touch with me? I'd love to hear from you. Here's how you can reach me.</p>
      </div>
      <div className="contactWrapper">
        <div className="contact-left">
          <ContactInfo/>
        </div>
        <div className="contact-right">
          <ContactForm2/>
        </div>
      </div>
  </ContactStyled>;
};


const ContactStyled = styled.div`
    width: 100%;
    height: 100vh;
   
    
    .ContactTop{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      background-color: #91919133;
      p{
        font-weight: 300;
        font-size: larger;
        padding: 1rem;
      }
    }
    .contactWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .contact-left{
      padding: 2rem;
      border-right: 2px solid #3333;
      
    }
    .contact-right{
      padding: 2rem;
    }

`;

export default ContactElement;
