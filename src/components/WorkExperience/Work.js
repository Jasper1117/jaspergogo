import React from 'react';
import WorkElements from './WorkElements';
import work from "../WorkExperience/WorkElementDetail"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./work.css"
import Aos from "aos";
import "aos/dist/aos.css";
import bg from "../../img/wavebg.svg"


const Work = () => {
  Aos.init({duration:1000});
  return (

      <div className="work-con" id="working">
      <div data-aos="fade-up" className="title">
        <h2>Experiences</h2>
        <p>Though I work as a video director or editor in the past few years, I think I can handle programming as well.</p>
     </div>
      <div className="img-con">

        <img src={bg} alt="" className='bgimg'/>
     </div>
     
  <Swiper data-aos="fade-up"
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={0}
  breakpoints={{
    700: {
      slidesPerView: 1,
    },
    1050: {
      slidesPerView: 2,
    },
  }}
 
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
  )
};

export default Work;

