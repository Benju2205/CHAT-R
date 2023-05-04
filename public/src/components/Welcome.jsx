import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Robot from "../assets/robot.gif";

export default function Welcome({currentUser}) {

  // const [userName,setUserName] = useState("");   //currentUser.username was not working so i created this state,

  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     try {
  //       const user = await JSON.parse(localStorage.getItem("chat-app-user"));
  //       setUserName(user.username);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span>{currentUser.username}</span>
      </h1>
      <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img{
        height: 20rem;
    }
    span{
        color: #4e00ff;
    }
`;
