import React from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rolldice}) => {
  return (
    <RollDiceContainer>
        <div className="dice" onClick={rolldice}>
            {console.log(currentDice)}
            <img src={`/dice_${currentDice}.jpg`} alt="no data of dice" />
        </div>
        <p>Click on Dice to roll</p>
    </RollDiceContainer>
  )
}

export default RollDice

const RollDiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin-top: 15px;
        color: #000;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .dice{
        cursor: pointer;
    }
    `;