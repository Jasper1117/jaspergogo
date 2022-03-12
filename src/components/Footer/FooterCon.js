import React from 'react';
import styled from 'styled-components';
import{FaFacebook, FaYoutube} from "react-icons/fa"
import{AiFillInstagram} from "react-icons/ai"
import{TiSocialYoutubeCircular} from "react-icons/ti"
import { Link } from 'react-scroll';
import "./footer.css"

const FooterCon = () => {
  return <FooterStyled>
      <footer>
          <div className="footerLink-con">
            <ul className='footerLink'>
              <div className="footerlink1">
                <li className='footerLi'><Link to="about" smooth={true} duration={500}> About </Link></li>
                <li className='footerLi'><Link to="educations" smooth={true} duration={500}> Educations </Link></li>
                <li className='footerLi'><Link to="working" smooth={true} duration={500}>Experiences</Link></li>
              </div>
              <div className="footerlink2">
              <li className='footerLi'><Link to="skills" smooth={true} duration={500}> Skills </Link></li>
              <li className='footerLi'><Link to="contact" smooth={true} duration={500}> Contact </Link></li>
              </div>
            </ul>
          </div>

          <div className="mediaLogo-con">
            <a href="https://www.facebook.com/genquan.xu/" className='mediaLogo'><FaFacebook /></a>
            <a href="https://www.instagram.com/jasper1117/" className='mediaLogo'> <AiFillInstagram/></a>
           <a href="https://www.youtube.com/user/jasperxu1117/" className='mediaLogo'><FaYoutube/></a>
            
          </div>
      </footer>

  </FooterStyled>;
};

const FooterStyled = styled.div`
width: 100%;

background-color: #62616D;
margin-top: 3rem;
font-weight: 300;

`;

export default FooterCon;
