import React from 'react'
import styled from 'styled-components';
import bgWave from "../../img/bgWave-02-01-01.svg"
import sun from "../../img/sun2.svg"
import self from "../../img/self-pic.svg"
import {NavLink} from "react-router-dom"

const newAbout = () => {

  return (
      
    <NewAboutStyled id="about">
        <div className="img">
            <img src={sun} alt="" className='sun' /> 
            <img src={bgWave} alt="" className='wave'/>
        </div>


        <div className="about-con">
          <div className="about-left">
            <img src={self} alt="" />
          </div>
          <div className="about-right">
            <h2>Hiello! I'm</h2>
            <h1 className="typing">Jasper Xu</h1>
          
              <p>People always say never too late to learn. I will say never too late to <b>learn and change.</b></p>
              <p className='aboutMe2'>I work as a video director in the pass few years. However, I'm trying to become a frontend developer. I learned coding by myself in the pass few months. Because I enjoy creating things. </p>
              <NavLink to="/contact" className="contact" > Contact
    
              </NavLink>
          </div>
          
        </div>




    </NewAboutStyled>
  )
  
  
}

const NewAboutStyled = styled.div`
background-color: #F9F8ED;
height: 100vh;
width: 100%;
position: relative;
display: flex;
.img{
    position: absolute;
    width: 100%;
}
img.sun{
    position: relative;

    padding-bottom: 10rem;
   /* top:-100% */
   display: flex;
   justify-content: flex-end;
   animation: sunMove 10s forwards ease;
}
@keyframes sunMove {
    0%{
        left: -15%;
        width: 30%;
        top: -90px;
        transform: rotate(0deg)
    }
    100%{
        left: -8%;
        width: 30%;
        top: -150px;
        transform: rotate(20deg)
    }
}

img.wave{
  position: relative;
 top:-16rem;
 width: 100%;
 height: 100vh;
}

.about-con{
    display: flex;
    align-items: center; 
    font-weight: 300;
    position: relative;
    width: 70%;
    left: 20%;
    color: #3b4349;
    .about-left{
      width: 50%;
      padding-left: 5rem;
      display: flex;
      padding-bottom: 10%;
      img{
        width: 60%;
      }
    }

    .about-right{
      width: 50%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
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
      background-color: #F9F8ED;
      animation:typewriter 1.1s steps(9) forwards ;
      left: 0;
    }
    h1::after{
      width: 0.05em;
      background: #D9A8A8;
      
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
       outline: 1px solid white;
       background-color: #96B9CA;
       padding: 0.3rem 1.2rem;
       color: white;
       text-decoration: none;
       transition: all 0.2s ease-in-out;
       :hover{
           box-shadow: 0px 0px 10px 1px white;;
           color: #364047;
           background-color: #E2A1A1;
           font-size: 1.6rem;
       }
  }
}

@media screen and (max-width:1821px){
  .about-con{
    left: 15%;
    top: -10%;
  }
}
@media screen and (max-width:1650px){
  img.wave{
    top:-8rem;
  }
  .about-con{
    left: 15%;
    top: -5%;
    .about-left{
    img{
      width: 80%;
    }
  }
  }
}
@media screen and (max-width:1400px){
  height: 90vh;
}
@media screen and (max-width:1180px){
  
  height: 80vh;
  img.wave{
    top:-11rem;
  }
  .about-con{
    left: 10%;
  }
}

@media screen and (max-width:950px){
  img.wave{
    top:-2rem;
  }
  height: 90vh;
  .about-con{
        left: 0;
        padding-top: 10rem;
        top: -80px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        .about-left{
        padding-left: 0rem;
        padding-top: 4rem;
        justify-content: center;
        padding-bottom: 1rem;
        img{
          width:50%
          
        }
        }
        .about-right{
        padding-right: 0rem;
        justify-content: center;
        align-items: center;

        }

    }
    @media screen and (max-width:600px){
      img.wave{
    top:1rem;
  }

  @keyframes sunMove {
    0%{
        left: -15%;
        width: 30%;
        top: 90px;
        transform: rotate(0deg)
    }
    100%{
        left: -8%;
        width: 30%;
        top: -90px;
        transform: rotate(20deg)
    }
}
      .about-con{
        .about-left{
       img{
          width:60%
        }
      }
      .about-right{
        h1{
         font-size: 4rem;
        }
        p{
          font-size: medium;
        }
      }
      }

    }
  }
  @media screen and (max-width:500px){
    .about-con{
        .about-left{
       img{
          width:80%
        }
      }
    }
    img.wave{
      top: -0.8rem;
    }
  }
`;

export default newAbout
