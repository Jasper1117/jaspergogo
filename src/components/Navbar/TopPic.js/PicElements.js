import React from 'react';
import styled from 'styled-components';
import center from "../../../img/center.svg"
import centerbg from "../../../img/TopBG.svg"
import email from "../../../img/email.svg"


const PicElements = () => {
    return <PicElementsStyle>
        <div className="bg-con">
        <div className="center-con">

            <img src={center} alt="" className="center" />

            <div className="btn-con">
                <button>Contact<img src={email} className='email'></img></button>
            </div>
        </div>
        <div className="bg-con">
        <img src={centerbg} alt="" className="centerbg" />
        </div>
        
        </div>
       
    
        
    </PicElementsStyle>;
};


const PicElementsStyle = styled.div`
    .bg-con{
        display: flex;
        justify-content: center;
        height: 85vh;
        .center-con{
        z-index: -1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        position: absolute;
        img.center{
          width: 70%;
        }
            .btn-con{
            padding-top: 3rem; 
            button{
            display: flex;
            align-items: center;
            justify-content: center; 
            padding: .4rem 1.5rem;
            font-size: 1.3rem;
            border-radius: 25px;
            border: none;
            background-color: #6386BB;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            :hover{
                background-color: #FFB6B6;
                color: #3F3D56;
            }
            }
            
            .email{
                padding-left: 1rem;
                width: 40%;
            }
            
        }
 
    }

        .bg-con{
            z-index: -3;
            position: absolute;
        .centerbg{
            width: 60%;
            
            animation: move 35s infinite;
            @keyframes move{
        0%{
           transform: translateX(0) rotate(0) scale(100%);
       }
       35%{
          transform: translateX(300px) rotate(-50deg) scale(90%);
       }
       70%{
          transform: translateX(-230px) rotate(100deg) scale(75%);
       }
        100%{
           transform: translateX(0) rotate(0) scale(100%);
        }
    }

        }
    }
    }


`;
export default PicElements;



// .bg-con{
//     display: flex;
//     justify-content: center;
//     position: relative;
//     text-align: center;
//     height: 100vh;  
//     overflow: hidden;
// }

// .center{
//     margin-top: 6rem;
//     width: 43%;
//     position: absolute;
// }

// .centerbg{
//     position: absolute;
//     width: 70%;
//     z-index: -1;
//     margin-left: 1000px;
//     margin-top: -110px;
//     animation: move 40s infinite;
    
// }
// .centerbg{
//     @keyframes move{
//         0%{
//             transform: translateX(0) rotate(0) scale(100%);
//         }
//         50%{
//             transform: translateX(-600px) rotate(-50deg) scale(90%);
//         }
//         100%{
//             transform: translateX(0) rotate(0) scale(100%);
//         }
//     }
// }

// .btn-con{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-top: -20%;
    
//     button{
//         display: flex;
//     justify-content: center;
//     align-items: center;
//         padding: 0.5rem 1rem;
//         border-radius: 25px;
//         outline: none;
//         cursor: pointer;
//         border: none;
//         font-size: 1.4rem;
//         background-color: #6386BB;
//         color: white;
//         transition: all .3s ease-in-out;
//         img{
//             width: 30%;
//             padding-left: 0.5rem;
//         }
//         :hover{
//             background-color: #3F3D56;
            
//         }
//     }
// }
