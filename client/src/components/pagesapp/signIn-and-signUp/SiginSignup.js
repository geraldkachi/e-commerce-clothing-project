import React from "react";
import SignIn from "../../signIn/SignIn";
import SignUp from "../../signup/SignUp";
// import './signinsignup.css'
import styled from "styled-components";
// import axios from "axios";

const SiginSignup = () => {
    // const [setState] = useState([])

// const getTodos = () => {
    // axios({
    //     method: 'get',
    //     url: 'https//jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 5
    //     }
    // })
    // .then( res => setState(res))
    // .catch( err => setState(err))
  
            // OR 
  
//     axios(`https//jsonplaceholder.typicode.com/todos?_limit=5`)
//     .then( res => setState(res))
//     .catch( err => setState(err))
//     console.log(getTodos);
// }


  return (
    <>
      <SignINUPStyled className="m-0 row">
        <SignIn className="col-sm" />
        <SignUp className="col-sm" />
      </SignINUPStyled>
      {/* <button type='button' onClick={getTodos}>getTodos</button> */}
    </>
  );
};

const SignINUPStyled = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    align-items: ;
  }
`;

export default SiginSignup;
