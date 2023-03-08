import './Contact.css'
import React, { useState, Component } from 'react';
import axios from 'axios';


  const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [requiredFields, setRequiredFields] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    
  /*
  onChange = (e) => {
    return this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  */
  const onSubmit = () => {
    // console.log(JSON.stringify(this.state.data));
    setSubmitted(true);
    const correctData = {};
    correctData.GuestName = name;
    correctData.Email = email;
    correctData.Phone = phone;
    correctData.MessageTitle = subject;
    correctData.Message = message;
    const requiredData = [];

    if(name === "") requiredData.push("name");
    if(email === "") requiredData.push("email");
    if(subject === "") requiredData.push("subject");
    if(message === "") requiredData.push("message");
    console.log(/\S+@\S+\.\S+/.test(email));
    
    if(email !== "" && !(/\S+@\S+\.\S+/.test(email))) 
        setErrorEmail(true);
    else     
        setErrorEmail(false);

    if(requiredData.length > 0) {
      setRequiredFields(requiredData.join(", "));
    } else {
      setErrorMsg(false);
    }
    if(errorEmail) {
            
      setSubmitted(false);
    } else if(requiredData.length >0) {
      if(requiredData.length >0) {
        setErrorMsg(true);
      } 
      setSubmitted(false);
    } else {
        axios.post(
            'https://btkadphv4b.execute-api.us-east-1.amazonaws.com/v1/contact',
            correctData
        ).then(
            (response) => {
              console.log("Response: " , JSON.stringify(response));
              setSuccessMsg(true);
              setErrorMsg(false);
              
              setSubmitted(false);              
            },
            (error) => {
              console.log("Error " , error);
              setErrorMsg(true);
              setSuccessMsg(false);
              setSubmitted(false);
            }
        );
    }            
  };
  
    return (
      <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      {errorMsg && (
              <div className="w3-panel w3-pale-yellow w3-display-container w3-border">Required Field(s) {requiredFields} are Missing.</div>
      )}
      {errorEmail && (
              <div className="w3-panel w3-pale-yellow w3-display-container w3-border">Email address must be valid.</div>
      )}
      {successMsg && (
              <div className="w3-panel w3-pale-green w3-display-container w3-border">Contact Submitted Successfully!</div>
      )}
        <form id="contactForm">
          <input
              type="text"
              id="name"
              name="name"              
              className="feedback-input"
              placeholder="Your Name*"
              onChange={(e)=>setName(e.target.value)}
              required
          />
          <input
              type="email"
              className="feedback-input"
              id="email"
              name="email"
              placeholder="Your Email*"
              onChange={(e)=>setEmail(e.target.value)}
              required
          />
          <input
              type="text"
              id="subject"
              name="subject"
              className="feedback-input"
              placeholder="Subject*"
              onChange={(e)=>setSubject(e.target.value)}
              required
          />
          <input
              type="text"
              className="feedback-input"
              id="phone"
              name="phone"
              placeholder="Phone"
              onChange={(e)=>setPhone(e.target.value)}
          />
          <textarea
              name="message"
              id="message"
              className="feedback-input"              
              rows="6"
              cols="6"
              placeholder="Your Message ...*"
              onChange={(e)=>setMessage(e.target.value)}
              required
          />
          {!submitted && (
              <button
                  type="button"
                  onClick={onSubmit}                                    
              >
                Send Message
              </button>
          )}
        </form>
        </section>
    )
  
}
export default Contact
