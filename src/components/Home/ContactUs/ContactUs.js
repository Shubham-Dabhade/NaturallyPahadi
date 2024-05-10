import React, { memo, useEffect, useRef, useState } from "react";
import "./contactus.css";
// import { sendMail, sendMailClient } from "../../../email";

const ContactUs = () => {
  const[information,setInformation] = useState({name:null,designation:null,email:null,comp:null,number:null})
  const name = useRef()



  window.onload = function () { 
    name.current.setAttribute('autoComplete',false)
  }

  const submitHandler=(event)=>{
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if ((information.name!=null && information.comp!=null && information.designation!=null && information.email!=null && information.number!=null) && (information.name!="" && information.comp!="" && information.designation!="" && information.email!="" && information.number!="")){
      //remove all errors except regex emails error


      if(!information.email.match(regex)){
        //add email error
      }
      else{
        //can remove email error if any

        event.preventDefault();
        const config={
          Host : "smtp.elasticemail.com",
          Username : "dabhadeshubham83@gmail.com",
          Password : "B7797CF703A884B8263327402D53249E02E2",
          To : 'dabhadeshubham83@gmail.com',
          From : "dabhadeshubham512003@gmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
        }
        if (window.Email){
          window.Email.send(config).then(()=>alert("Message sent"))
        }
      }
    }
    else{
      //add empty input error using switch case
    }
  }
  return (
    <div id="ContactUs">
      <div className="inside-contactus-container">
        <div className="contactus-left-container">
          <img
            src={require("../../../assets/4x/contaactus-cheif.png")}
            alt="contactus-img"
            className="contactus-left-img"
          />
        </div>
        <div className="contactus-right-container">
          <img
            src={require("../../../assets/4x/blob.png")}
            alt="right-contactus-img"
            className="contactus-right-img"
          />
          <form action="" className="contactus-form">
            <div className="contactus-title contact-li">
              Please fill the below form for all call from our sales
              representatives:
            </div>
            <div className="contact-li" >
              <label htmlFor="name">Name</label>
              <input type="text" name="name" ref={name} id="name" autoComplete="nope" onChange={(e)=>{console.log(setInformation({name:e.target.value}))}} required/>
            </div>
            <div className="contact-li">
              <label htmlFor="designation">Designation</label>
              <input type="text" name="designation" id="designation" autoComplete="my-field-name1" onChange={(e)=>{console.log(setInformation({designation:e.target.value}))}} required/>
            </div>
            <div className="contact-li">
              <label htmlFor="comp_cafe">Company/Cafe</label>
              <input  type="text" name="comp_cafe" id="comp_cafe" autoComplete="my-field-name2" onChange={(e)=>{console.log(setInformation({comp:e.target.value}))}} required/>
            </div>
            <div className="contact-li">
              <label htmlFor="number">Mobile Number</label>
              <input type="number" name="number" id="number" autoComplete="my-field-name3" onChange={(e)=>{console.log(setInformation({number:e.target.value}))}} required/>
            </div>
            <div className="contact-li">
              <label htmlFor="email" >Email Id</label>
              <input type="email" name="email" id="email" autoComplete="my-field-name4" onChange={(e)=>{console.log(setInformation({email:e.target.value}))}} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" required/>
            </div>
            <div className="contact-li checkbox-li">
              <input type="checkbox" name="checkbox"  id="checkbox" required/>
              <label htmlFor="checkbox" className="checkbox-label">
                I agree to receive related communications via phone and email.
                For more information on how we process your data for marketing
                communication. Check our Privacy policy.
              </label>
            </div>
            <button className="contactus-form-button" value="Send Email" onClick={submitHandler} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
