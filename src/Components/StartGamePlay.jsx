import React from 'react'
import styled from 'styled-components'
const StartGamePlay = ({toggle}) => {
  return (
    <Wrapper>
        <div>
            <img src="/dicelogo.jpg" alt="sorry bro no dice" />
        </div>
        <div className="gameStart">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
        
    </Wrapper>
  )
}

export default StartGamePlay


const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    max-width: 1182px;
    .gameStart h1{
        white-space: nowrap;
        color: #000;
        font-family: Poppins;
        font-size: 96px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    `;

const Button = styled.button`
    font-size: 16px;
    padding: 10px 18px;
    min-width: 220px; 
    background: #000000;
    border: 1px solid transparent;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 auto;

    transition: 0.3s background ease-in;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        
        transition: 0.3s background ease-in;
    }
    `;
