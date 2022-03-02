import React from 'react';
import {MdEmail,MdLocationOn} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import styled from 'styled-components';

const ContactInfo = () => {
  return <ContactInfoStyled>
      <div className="contact-info">
        <div className="icon"><BsFillTelephoneFill/></div>
        <div className="info"><p>+852 64388950</p></div>
      </div>
      <div className="contact-info">
         <div className="icon"><MdEmail/></div>
        <div className="info"><p>Jasperxu1117@gmail.com</p></div>
      </div>
      <div className="contact-info">
         <div className="icon"><MdLocationOn/></div>
        <div className="info"><p>Wong Tai Sin, Kowloon</p></div>
      </div>
  </ContactInfoStyled>;
};

const ContactInfoStyled = styled.div`
    display: flex;
    flex-direction: column;

    .contact-info{
        display: flex;
        align-items: center;
        padding: 0.6rem 1rem; 
        margin: 0.4rem;
      
        border-radius: 50px;
        box-shadow: 1px 2px 10px -2px rgba(0, 0, 0, 0.2);
    }
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        background-color: #d4d4d4;
        padding:0.6rem;
        border-radius: 50%;
        margin-right: 0.7rem;
        color: #333333;
    }
`;



export default ContactInfo;
