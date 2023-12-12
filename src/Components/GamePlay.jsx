import React, { useState } from 'react'
import ScoreDisplay from './ScoreDisplay'
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import Rules from './Rules';
const GamePlay = () => {
    const [score, SetScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, SetError] = useState("");
    const [showRules, SetShowRules] = useState(false);

    const generateRandomNumber = (min, max)=>{ 
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rolldice = ()=>{
        if(!selectedNum){
            SetError("You have to Select a Number!!!");
            return;
          }
        const Random = generateRandomNumber(1,7);
        setCurrentDice((prev)=> Random);
        if(selectedNum===Random){
            SetScore((prev) => prev + Random);
          }else{
            SetScore((prev)=> prev-2);
          }
          setSelectedNum(undefined);
    }
  return (
    <Main>
        <div className="top_section">
            <ScoreDisplay score={score}/>
            <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} SetError={SetError}/>
        </div>
        <RollDice currentDice={currentDice} rolldice={rolldice}/>
        <div className="buttons">
            <Button onClick={()=>SetScore(0)}>Reset</Button>
            <Button onClick={()=> SetShowRules(!showRules)}>Show Rules</Button>
            <Rules showRules={showRules}/>
        </div>
    </Main>
  )
}

export default GamePlay

const Main = styled.div`
    .top_section{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 1rem;
    }
    .buttons{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 36px;
      gap: 24px;
    }

`


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
