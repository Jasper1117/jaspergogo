import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, handleSubmit] = useForm("xgedyoer");
  if (state.succeeded) {
      return <p>Thanks!</p>;
  }
  return <div>
      <FormStyled onSubmit={handleSubmit}>
        <div className="fromGroup">
            <label htmlFor="name">Your Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
        </div>
        <div className="fromGroup">
            <label htmlFor="email">Your Email</label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

        </div>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <div className="fromGroup">
            <label htmlFor="message">Your Message</label>
            <textarea 
                type="text" 
                id="message" 
               name ="message" 
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />

        </div>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <button type='submit' disabled={state.submitting}>Send</button>
        </FormStyled>
        <div id="my-form-status"></div>



  </div>;

};
function ContactForm2() {
    return (
      <ContactForm />
    );
  }

const FormStyled = styled.form`


    padding: 1rem;
        border-radius: 20px;
        box-shadow: 1px 2px 10px -2px rgba(0, 0, 0, 0.2);
        color: #333333;
        
    .fromGroup{
        display: flex;
        flex-direction: column;
        padding-top: .8rem;
        
    }   
    input{
        margin-top: .3rem;
        font-size: large;
        padding: 0.3rem;
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        background-color: #dbdbdb33;
   
    }
    textarea{
        margin-top: .3rem;
        max-width: 400px;
        min-width: 400px;
        max-height: 200px;
        min-height: 200px;
        border-radius: 10px;
        font-size: large;
        padding: 0.3rem;
        border: none;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        background-color: #dbdbdb33;
    }
    button{
        font-size: medium;
        margin-top: 1rem;
        padding: 0.5rem 1.5rem;
        border: none;
        border-radius: 30px;
        transition: all .3s ease-in-out;
        width: 100%;
        :hover{
            background-color: #333333;
            color: white;
        }
    }
    @media screen and (max-width:500px){
        textarea{
            -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
    max-width: 250px;
        min-width: 250px;
        }
        
    }
`;


export default ContactForm2;
