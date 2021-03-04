import React from "react";
import './contactspage.css'

const ContactPage = () => {
  return (
    <>
     <div style={{backgroundColor:''}} id="filter" className='bg-warning text-center text-light'>
         <div className="mt-5"></div>
        <div className="text-capitalize display-3 text-dark mx-auto">Contacts</div> 
         <div className="lead px-5">Gmail: fitzgeraldkachi@mail.com</div>
         <div className="lead px-5">Instagram: @geraldkachi</div>
         <div className="lead px-5">Phone: 09039278115</div>
         {/* <div className="lead px-5">Twitter: @KachiFitzgerald</div> */}
     </div>
    </>
  );
};

export default ContactPage;
