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
          {toggle && <p>{description}</p>}
          </div>
            
      </div>

  </EducationElementStyle>;
};

const EducationElementStyle = styled.div`
width: 700px;

.education-con{
    border-radius: 20px;
    background-color: #3F3D56;
    color: white;
    margin: 2rem;
    padding: 1rem 2rem;
    box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.2);
    font-weight: 300;

}
    .info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
       
        button{
            background:transparent ;
            outline: none;
            border: none;
            
        }
    }
    .info-dis{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`;


export default EducationElements;
