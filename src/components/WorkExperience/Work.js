import React from 'react';
import styled from 'styled-components';
import WorkElements from './WorkElements';
import work from "../WorkExperience/WorkElementDetail"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./work.css"
import workbg from "../../img/Group 2.svg"
import workbg2 from "../../img/Group 3.svg"
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  Aos.init({duration:1000});
  return <div className="work-con" id="working">
      <div data-aos="fade-up" className="title">
        <h2>Experiences</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ad.</p>
     </div>
      <div className="img-con">
        <img src={workbg} alt="" className='bg1'/>
        <img src={workbg2} alt="" className='bg2'/>
     </div>
     
  <Swiper data-aos="fade-left"
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={2}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
  className='slide'
 >
     
   
    {
          work.map((q)=>{
              return <SwiperSlide className="card" >
              
                  <WorkElements key={q.id} {...q}/>
           
                  </SwiperSlide>
          })
    }
  

</Swiper>
</div>

};



// const WorkingStyled = styled.div`

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
    
//     .work-title{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding-bottom: 2rem;
//     }
//     .card-con{
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin: 1rem;
        

//     }
// `;

export default Work;



//   <WorkingStyled id="working">
//       <div className="work-title">   
//           <h2>Working Experiences</h2>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, esse!</p>
//       </div>
//       <div className="card-con">
    //   {
    //       work.map((q)=>{
    //           return <WorkElements key={q.id} {...q}/>
    //       })
    //   }
//       </div>
//   </WorkingStyled>;