import React, { Fragment } from "react";
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Fragment>
     <div className="text-center">
     <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="" style={{color:'red'}}>
            return home
          </Link>
        </Banner>
      </Hero>
     </div>
    </Fragment>
  );
};
// const styError = {
//   height: "80hv",
// };

const Banner = ({ children, title, subtitle }) => {
    return (
      <Fragment>
        <div className="banner">
          <h1>{title}</h1>
          <div />
          <p>{subtitle}</p>
          {children}
        </div>
      </Fragment>
    );
  };


const Hero = ({ children, hero }) => (
    <header className={hero}>{children}</header>
  );
  
  Hero.defaultProps = {
    hero: "defaultHero",
  };


export default Error;