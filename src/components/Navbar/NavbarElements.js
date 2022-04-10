import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {GrMenu, GrFormDown} from "react-icons/gr"
import {NavLink} from "react-router-dom"



const NavbarElements = () => {
    const [click, setClick] = useState(false);
    const clickHandler =()=> setClick(!click);
    const closeMenu =()=> setClick(false);
    // const [navbar, setNavbar] = useState(false);
    // const changeBackground =()=>{
    //     if(window.scrollY>=120){
    //         setNavbar(true);
    //     }
    //     if(window.screen.width<=963){
    //         setNavbar(true);
    //     }
    //     else{
    //         setNavbar(false);
    //     }
    // }
    // window.addEventListener("scroll", changeBackground)

    return <NavbarElementsStyled>
        <div className="main-bar active">
           <div className="nav-con">
           <p className="nameLogo active" to="/" onClick={closeMenu}>
            Jasper
            </p>
            <div className="menu-icon" onClick={clickHandler}>
                    {click? <GrFormDown/> : <GrMenu/>}
            </div>
                <ul className={click? "menu-active" : "nav-menu"}>
                
                    <li><Link to="about" onClick={closeMenu} smooth={true} duration={400}>About</Link></li>
                  
               
                    <li><Link to="educations" onClick={closeMenu} smooth={true} duration={400}>Educations</Link></li>
            
            
                    <li><Link to="working" onClick={closeMenu} smooth={true} duration={400}>Experiences</Link></li>

                    <li><Link to="skills" onClick={closeMenu}smooth={true} duration={400}>Skills</Link></li>


                <div className="nav-button">
                    <NavLink to="/contact" className="contact" onClick={closeMenu}> Contact
                    {/* <button className="contact" onClick={closeMenu}>
                            Contacts
                    </button> */}
                    </NavLink>
                </div>
                </ul>
           </div>
        </div>
        
    </NavbarElementsStyled>;
};
const NavbarElementsStyled = styled.div`

   .main-bar{
       display: flex;
       background: transparent;
       /* background: #3F3D56; */
       height: 60px;
       justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        position: sticky;
        font-weight: 200;
        /* color: white; */
        color: black;
        width: 100%;
   }
   .main-bar.active{
       background-color: rgba(255, 255, 255, 0.96);
       box-shadow: 0px -15px 30px .2px #888888;
       color: #868593;
   }

   .nameLogo{
        cursor: pointer;
        text-decoration: none;
        font-size: 1.7rem;
        padding-left: 2rem;
        color: #ffffff;
    }
    .nameLogo.active{
        
        color: #3F3D56;
    }

   .nav-con{
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    
   }
   h2{
       padding-left: 2rem;
   }
   .nav-menu{
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .mainPage{
       display: flex;
   }
   li{
       display: flex;
       align-items: center;
       margin: 1rem 1.7rem;
       border-bottom: 1px solid transparent;
       transition: border-bottom 0.3s linear;
       position: relative;
       cursor: pointer;
       
       
   }
   li::after{
       content: "";
       width: 0%;
       height: 1.5px;
       position: absolute;
       left: 50%;
       background-color: #aaa9ad;
       bottom: -10px;
       transition: width 0.3s ease-in-out;
       transform: translateX(-50%);
       
   }
   li:hover::after{
    width: 50%;
   }

   .nav-button{
       margin-right: 2rem;
   }

   .contact{
       border-radius: 50px;
       background-color: #7aa1db;
       padding: 0.3rem 1.2rem;
       color: white;
       text-decoration: none;
       transition: all 0.2s ease-in-out;
       :hover{
           background-color: #3F3D56;
           box-shadow: 0 0 5px white,
                0 0 10px white,
                0 0 13px white,
                0 0 16px white;
       }
   }

   .menu-icon{
       display: none;
   }

   @media screen and (max-width:960px){

    .menu-active{
        display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       height: 100vh;
       background-color: #F2F2F2;
       width: 100%;
       position: absolute;
       top: 60px;
      color: #868593;
        left: 0;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      z-index: 999;

      li{
        border-bottom: none;
       transition: all 0.3s linear;
       cursor: pointer;
       :hover{
        font-size: 1.3rem;
       }
          padding: 2rem;
          
      }
        button{
            background-color: #FFB6B6;
            padding: .6rem 2.1rem;
        }
    }


       .nav-menu{
        display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       height: 100vh;
       background-color: #F2F2F2;
       width: 100%;
       position: absolute;
       left: -100%;
       top: 60px;
      color: #868593;
      transition: all 0.4s ease-in-out;
      li{
          padding: 2rem;
          border-bottom: none;
      }
      
       }

       .nav-button{
       margin-right: 0rem;
       padding-top: 2rem;

   }

   .menu-icon{
       display: block;
       margin-right: 2rem;
       font-size: 1.8rem;
       

   }


   }
`;

export default NavbarElements;



// .main-bar{
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background-color: white;
//     position: static;
//     padding: 0.7rem 5rem 0.3rem 5rem;
//     height: 60px;
//     box-shadow: 0 .8px 5px 0 rgba(0, 0, 0, 0.19);
    
// .menu-icon{
//     display: none;
// }
    
// .nav-menu{
//     list-style-type: none;
//     display: flex;
//     font-size: 1.1rem;
//     cursor: pointer;
//     color: rgb(63, 61, 86, 0.5);
//     font-weight: 300;
    
//     li{
//         transition: all  0.3s ease-in-out;
//         margin: 0 1rem;
//     :hover{
//         color: rgb(63, 61, 86, 1);
  
//     }

//     }

// }

// button{
//     display: flex;
//     justify-content: flex-end;
//     padding: 0.3rem 1rem;
//     border-radius: 25px;
//     outline: none;
//     cursor: pointer;
//     border: none;
//     font-size: 1.1rem;
//     color: #3F3D56;
//     transition: all .4s ease-in-out;
//     :hover{
//             background-color: #3F3D56;
//             color: white;
// }
// }
// }

// @media screen and (max-width:960px){
//     .nav-menu{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         width: 100%;
//         height: 100vh;
//         position: relative;
//         top: 200px;

//         li{
//         padding: 1.3rem;
//         font-size: 1.4rem;
//         color: #7f7d91;
//         }
// }
//     .menu-active{
//         background-color: #3F3D56;
//         padding: 310px;
//     }
    
// }
