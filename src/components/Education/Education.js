import React from 'react';
import styled from 'styled-components';
import education from "../Education/EducationInfo"
import EducationElements from './EducationElements';
import Aos from "aos";
import "aos/dist/aos.css";
import workbg from "../../img/Group 2.svg"



const Education = () => {

        Aos.init({duration:300});

  return <EducationStyled id="educations">
        <div data-aos="fade-up" className="title">
              <h2>Education</h2>
              <p>My major at university is <b>Creative Media</b>, which encourages students to finish their art work combined with different knowledge from various fields.
              Such as <b>computer science and architecture</b>. Therefore, I learned some JavaScript when I was in college.</p>
          </div>
          <div className="imgCon">
            <img src={workbg} alt="" className='bg1'/>
            <img src={workbg} alt="" className='bg2'/>
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
    height: 70vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 11rem 0rem 7rem 0rem;
    position: relative;
    padding-bottom: 2rem;
    .title p{
        width: 60%;
        text-align: center;
        padding-bottom: 1.5rem;
        font-size:medium;
    }
    .title h2{
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
    }

img.bg1{
    position: absolute;
    top: 190px;
    left: 19%;
    width: 11%;
}
img.bg2{
    position: absolute;
    width: 13%;
    bottom: 1%;
    right: 19%;
}

@media screen and (max-width:980px){
    margin: 9rem 0rem 7rem 0rem;
}
@media screen and (max-width:750px){
    margin: 5rem 0rem 5rem 0rem;
}
@media screen and (max-width:400px){
    margin: 0rem 0rem 0rem 0rem;
}
`;


export default Education;
