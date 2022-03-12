import React from 'react';
import "./skill1.css"
import { DiCss3, DiHtml5, DiReact,DiJavascript1 } from 'react-icons/di';




const Skill1 = () => {
  return <div>
      <div className='fontEnd'>
    <div className="left">
        <div className="react">
           <div className='frontEndLogo'> <DiReact/></div>
            <div className="bar">
                <div className="react-outer"></div>
                <div className="react-inner"></div>
            </div>
        </div>
        <div className="html">
             <div className='frontEndLogo'>
            <DiHtml5/>
            </div>
            <div className="bar">
                <div className="html-outer"></div>
                <div className="html-inner"></div>
            </div>
        </div>

    </div>
    <div className="right">
        <div className="css">
            <div className='frontEndLogo'>
            <DiCss3/>
            </div>
            <div className="bar">
                <div className="css-outer"></div>
                <div className="css-inner"></div>
            </div>

        </div>
        <div className="js">
            <div className='frontEndLogo'>
            <DiJavascript1/>
            </div>
            <div className="bar">
                <div className="js-outer"></div>
                <div className="js-inner"></div>
            </div>
        </div>
    </div>
    </div>
  </div>;
};

export default Skill1;
