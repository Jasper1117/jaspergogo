import React from 'react';
import styled from 'styled-components';
import{FaFacebook, FaYoutube} from "react-icons/fa"
import{AiFillInstagram} from "react-icons/ai"
import {NavLink} from "react-router-dom"
import { Link } from 'react-scroll';
import "./ContactFooter.css"

const ContactFooter = () => {
  return <ContactFooterStyled>
      <footer>
          <div className="footerLink-con">
            <ul className='footerLink'>
              <div className="footerlink1">
                <li className='footerLi'><NavLink to="/" className="contactFooter" smooth={true} duration={500}> About </NavLink></li>
                <li className='footerLi'><NavLink to="/" className="contactFooter" smooth={true} duration={500}> Educations </NavLink></li>
                <li className='footerLi'><NavLink to="/" className="contactFooter" smooth={true} duration={500}>Experiences</NavLink></li>
              </div>
              <div className="footerlink2">
              <li className='footerLi'><NavLink to="/" className="contactFooter"smooth={true} duration={500}> Skills </NavLink></li>
              <li className='footerLi'><NavLink to="/contact" className="contactFooter" mooth={true} duration={500}> Contact </NavLink></li>
              </div>
            </ul>
          </div>

          <div className="mediaLogo-con">
            <a href="https://www.facebook.com/genquan.xu/" className='mediaLogo'><FaFacebook /></a>
            <a href="https://www.instagram.com/jasper1117/" className='mediaLogo'> <AiFillInstagram/></a>
           <a href="https://www.youtube.com/user/jasperxu1117/" className='mediaLogo'><FaYoutube/></a>
            
          </div>
      </footer>

  </ContactFooterStyled>;
};

const ContactFooterStyled = styled.div`
width: 100%;

background-color: #62616D;
margin-top: 3rem;
font-weight: 300;

`;

export default ContactFooter;
