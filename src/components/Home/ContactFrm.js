import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactFrm = () => {
  const form = useRef();

  const [name , setName] =useState();
  const [email, setEmail] =useState();
  const [message, setMessage] =useState();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams ={

      from_name : name,
      from_email :email,
      message : message,
      to_email: "yaikhomc@gmail.com",
      to_name:"Meira(Admin)",
    };

    const publicKey= "d9A_xI33x3EGiIoQB";
    const serviceID= "service_5zk54ys";
    const templateId = "template_3u29u8e";

    emailjs
      .send(serviceID, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={(e)=>setName(e.target.value)}/>
      <label>Email</label>
      <input type="email" name="user_email" onChange={(e)=>setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" onChange={(e)=>setMessage(e.target.value)} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactFrm;