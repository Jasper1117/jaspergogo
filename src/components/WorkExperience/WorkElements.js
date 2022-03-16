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
    width: 70%;

}
.card-con{
  width: 300px;
  border-radius : 30px;
  background-color: #3F3D56;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.year{
  font-size: large;
  border-bottom: 3px solid white;
}
.jobTitle{
  padding-top: 2rem;
}
.company{
  padding-top: 2rem;
}
`;
export default WorkElements;
