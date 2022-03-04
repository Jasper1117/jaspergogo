import React from 'react';
import styled from 'styled-components';
import self from "../../img/self-pic.svg"
import {NavLink} from "react-router-dom"

const AboutElements = () => {
  // const texts = ["JASPER", "XUHE"];
  // let count=0;
  // let index=0;
  // let currentText ="";
  // let letter ="";

  // (function type(){
  //   if(count === texts.length){
  //     count=0;
  //   }
  //   currentText = texts[count];
  //   letter = currentText.slice(0, ++index);

  //   document.querySelector('.typing').textContent = letter;
  //   if(letter.length === currentText.length){
  //     count++;
  //     index=0;
  //   }
  //   setTimeout(type, 200);
  // }());


  return <AboutElementStyle>
      <div className="about-con">
          <div className="about-left">
            <img src={self} alt="" />
          </div>
          <div className="about-right">
          <h2>Hiello! I'm</h2>
          <h1 className="typing">Jasper Xu</h1>
         
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nihil nisi voluptatem asperiores tempore necessitatibus possimus iusto. Nesciunt, deserunt praesentium.</p>
            <NavLink to="/contact" className="contact" > Contact
  
             </NavLink>
          </div>
          
      </div>
      
  </AboutElementStyle>;
};

const AboutElementStyle = styled.div`
    background-color: #3F3D56;
    color:white ;

  .about-con{
    display: flex;
    align-items: center; 
    height: 100vh;
    font-weight: 300;

    .about-left{
      width: 50%;
      padding-left: 5rem;
      display: flex;
      
      img{
        width: 60%;
      }
    }
    .about-right{
      width: 50%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding-right: 5rem;
    }
    h1{
      font-size: 6rem;
      position: relative;
      width:max-content ;
    }

    h1::before,
    h1::after{
      content: "";
      position: absolute;
      top:0 ;
      left:0 ;
      right:0 ;
      bottom: 0;
    }

    h1::before{
      background-color: #3F3D56;
      animation:typewriter 1.1s steps(9) forwards ;
      left: 0;
    }
    h1::after{
      width: 0.05em;
      background: white;
      
      animation:typewriter 1.1s steps(11) forwards ,
      brink 1.2s infinite ease;
    }
    @keyframes brink {
      0%{
        opacity:0% ;
      }
      100%{
        opacity:100% ;
      }
    }

    @keyframes typewriter {
      to{
        left: 100%;
      }
    }

    h2{
      font-size: 2rem;
    }
    p{
      font-size: 1.3rem;
      padding-top: 1.5rem;
    }
    .contact{
      display:flex ;
      justify-content:center ;
      align-items:center ;
      font-size: 1.5rem;
      width: 120px;
      height: 5vh;
      margin: 2rem 0rem;
       border-radius: 50px;
       background-color: #7aa1db;
       padding: 0.3rem 1.2rem;
       color: white;
       text-decoration: none;
       transition: all 0.2s ease-in-out;
       :hover{
           box-shadow: 0px 0px 10px 1px white;;
           color: #364047;
           background-color: #acc9f3;
           font-size: 1.6rem;
       }
  }
}
`;
export default AboutElements;