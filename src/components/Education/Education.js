import React from 'react';
import styled from 'styled-components';
import education from "../Education/EducationInfo"
import EducationElements from './EducationElements';
import educationbg from "../../img/educationbg2.svg"
import Aos from "aos";
import "aos/dist/aos.css";


const Education = () => {

        Aos.init({duration:300});

  return <EducationStyled id="educations">
        <div data-aos="fade-up" className="title">
              <h2>Education</h2>
          </div>
      <div className="education-con">
          {
              education.map((q)=>{
                  return <EducationElements key={q.id} {...q}/>
              })
          }
      </div>

 
  </EducationStyled>;
};

const EducationStyled = styled.div`
    display: flex;
    height: 60vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0rem;
    position: relative;
    padding-bottom: 4rem;
    .title h2{
        border-bottom: 1px solid black;
    }
`;


export default Education;
