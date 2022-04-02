import React from 'react';
import styled from 'styled-components';

const WorkElements = ({year, titleName, companyName,companyLogo}) => {
  return <WorkElementStyled>
    <div className="card-con">
      <ul>
        <li className='year'>{year}</li>
        <li className='jobTitle'>Job Title:</li>
        <li className="titleName">{titleName}</li>
        <li className="company">Company:</li>
        <li className="companyName">{companyName}</li>
        <li className="companyLogo" >{companyLogo}</li>
      </ul>
    </div>

  </WorkElementStyled>;
};


const WorkElementStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;

.titleName{
  font-weight: 300;

}
.companyName{
  font-weight: 300;

}
img{
    width: 60%;

}
.card-con{
  width: 300px;
  position: relative;
  border-radius : 30px;
  background-color: whit;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  box-shadow: 2px 3px 15px 1px rgba(82, 82, 82, 0.2);
  overflow: hidden;
}
.card-con::before{
  content: "";
  width: 500px;
  height: 500px;
  top: -50px;
  position: absolute;
  background: linear-gradient(#ffcccc,#88bfd6);
  z-index: -1;
  opacity: 0.6;
  animation: animate 2.5s linear infinite;
}
@keyframes animate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(365deg);
  }
}
.card-con::after{
  content: "";
  position: absolute;
  inset: 5px;
  background-color: white;
  z-index: -1;
  border-radius : 25px;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border:2px;
  
}
.year{
  font-size: large;

}
.jobTitle{
  padding-top: 2rem;
}
.company{
  padding-top: 2rem;

}
img{
  padding-top: 1rem;
}
`;
export default WorkElements;
