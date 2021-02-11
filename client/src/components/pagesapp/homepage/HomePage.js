import React from "react";
import Directory from "../../directory/Directory";
import { HomePageContainer } from "./HomePageStyled";
// import styled from "styled-components"

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

// const HomePageContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 20px 80px;
// `

export default HomePage;
