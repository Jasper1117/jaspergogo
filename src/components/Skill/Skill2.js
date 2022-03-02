import React from 'react';
import "./skill2.css"

import { DiCss3 } from 'react-icons/di';
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro,SiAdobeillustrator } from 'react-icons/si';



const Skill1 = () => {
  return <div>
      <div className='videoEdit'>
    <div className="videoLeft">
        <div className="ps">
           <div className='adobeLogo'> <SiAdobephotoshop/></div>
            <div className="bar">
                <div className="ps-outer"></div>
                <div className="ps-inner"></div>
            </div>
        </div>
        
        <div className="ai">
            <div className='adobeLogo'>
            <SiAdobeillustrator/>
            </div>
            <div className="bar">
                <div className="ai-outer"></div>
                <div className="ai-inner"></div>
            </div>

        </div>

    </div>
    
    <div className="videoRight">

        <div className="pr">
             <div className='adobeLogo'>
            <SiAdobepremierepro/>
            </div>
            <div className="bar">
                <div className="pr-outer"></div>
                <div className="pr-inner"></div>
            </div>
        </div>

        <div className="ae">
            <div className='adobeLogo'>
            <SiAdobeaftereffects/>
            </div>
            <div className="bar">
                <div className="ae-outer"></div>
                <div className="ae-inner"></div>
            </div>
        </div>
    </div>
    </div>
  </div>;
};

export default Skill1;
