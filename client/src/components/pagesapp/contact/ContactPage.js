import React from "react";
import './contactspage.css'

const ContactPage = () => {
  return (
    <>
     <div style={{backgroundColor:'#414A50'}} id="filter" className='py-5 text-center text-light'>
         <div className=" "></div>
        <div className="text-capitalize display-3 mx-auto py-2">Contacts</div> 
         <div className="lead px-5">Gmail: fitzgeraldkachi@mail.com</div>
         <div className="lead px-5">Instagram: @geraldkachi</div>
         <div className="lead px-5">Phone: 09039278115</div>
         {/* <div className="lead px-5">Twitter: @KachiFitzgerald</div> */}
     </div>
    </>
  );
};

export default ContactPage;
