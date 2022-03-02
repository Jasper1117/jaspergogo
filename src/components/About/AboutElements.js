import React from 'react';
import styled from 'styled-components';
import self from "../../img/self-pic.svg"
import aboutBg from "../../img/aboutBg.svg"

const AboutElements = () => {
  return <AboutElementStyle>
      <div className="about-con">
          <div className="about-left">
            <img src={self} alt="" />
            <div className="about-left-text">
              <p>許根權<br/>Xu Gen Quan, Jasper</p>
     
            </div>
            
          </div>
          <div className="about-right">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nihil nisi voluptatem asperiores tempore necessitatibus possimus iusto. Nesciunt, deserunt praesentium.</p>
          </div>
       
      </div>
      
  </AboutElementStyle>;
};

const AboutElementStyle = styled.div`
  .about-con{
    display: flex;
    align-items: center; 
    height: 100vh;
    font-weight: 300;

    .about-left{
      width: 50%;
      padding-left: 30px;
      display: flex;
      .about-left-text{
        display: grid;
        grid-template-columns: repeat(1 2fr);
        padding: 0rem 2rem;
        margin: auto;
        font-weight: 300;
      }
      img{
        width: 60%;
      }
    }
    .about-right{
      width: 50%;
      padding-left: 6rem;
      padding-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .aboutBg{
      
      position: absolute;
      z-index: -3;

      width: 100%;
    }
  }
`; 

export default AboutElements;


// .about-con{
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   padding:  7rem 5rem ;
//   position: absolute;
//   align-items: center;
//   .about-left{
//     display: flex;
//     padding-left: 4rem;
//     img{
//       width: 60%;
//     }
//     .about-left-text{
//       padding-top: 14rem;
//     }
//   }

//   .about-right{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// }

// .aboutBg{
//   width: 100%;
//   position: relative;
//   z-index: -1;
//   top:84%;
  
// }