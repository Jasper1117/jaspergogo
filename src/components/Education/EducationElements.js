import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '../../img/plus.svg';
import Aos from "aos";
import "aos/dist/aos.css";

const EducationElements = ({year, school, description}) => {
    const [toggle, setToggle] = useState(false);
    const btnToggle =()=>{
        setToggle(!toggle);
    }

    Aos.init({duration:1000});
  return <EducationElementStyle>

      <div data-aos="fade-up"className="education-con">
          <div className="info">
              <div className="info-year">
                <p>{year}</p>
              </div>
              <div className="info-school">
                <p>{school}</p>
              </div>
              <button onClick={btnToggle}>
                  <img src={Plus} alt="" />
              </button>
          </div>
          <div className="info-dis">
      
          {toggle&&<p>{description}</p>}
       
          </div>
            
      </div>

  </EducationElementStyle>;
};

const EducationElementStyle = styled.div`
width: 700px;

.education-con{
    border-radius: 20px;
    background: linear-gradient(30deg,#ecd4d4,white,#b4dae9);
    margin: 2rem;
    padding: 1rem 2rem;
    box-shadow: 0px 0px 20px 4px rgba(104, 104, 104, 0.2);
    font-weight: 300;

}
    .info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #3F3D56;
       font-weight: 400;
        button{
            background:transparent ;
            outline: none;
            border: none;
            
        }
    }
    .info-dis{
        display: flex;
        justify-content: center;
        
    }
    @media screen and (max-width:710px){
        width:600px
    }
    @media screen and (max-width:560px){
        width:500px
    }
    @media screen and (max-width:480px){
        width:350px;
        .education-con{
        margin: 1rem 0;
        }
    }


`;


export default EducationElements;
