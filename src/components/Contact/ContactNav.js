import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ContactNav = () => {
  return <ContactNavStyle>
      <NavLink to="/" className="conNavLogo">
      Jasper
      </NavLink>
  </ContactNavStyle>;
};

const ContactNavStyle = styled.div`
        position: fixed;
        width: 100%;
        z-index: 1000;
        display: flex;
       background: #ffffff;
       height: 60px;
       justify-content: flex-start;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        font-weight: 200;
        color: #868593;
        box-shadow: 0px -15px 30px .2px #888888;
        width: 100%;
.conNavLogo{
    cursor: pointer;
        text-decoration: none;
        font-size: 1.7rem;
        padding-left: 2rem;
        color: #3F3D56;
}
`;

export default ContactNav;
