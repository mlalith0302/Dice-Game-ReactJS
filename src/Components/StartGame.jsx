import React from 'react'
import styled from 'styled-components';
import { Button } from './styled/Button';


const Container = styled.div`
    max-width: 1182px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

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


const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/dicelogo.jpg" alt="sorry Bro" height="522px" width="649px"/>
        </div>
        <div className="gameStart">
            <h1 width="528px" height="144px"> DICE GAME</h1>
            <Button className="startButton" onClick={toggle}> Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame