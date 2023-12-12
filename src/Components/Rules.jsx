import React from 'react'
import styled from 'styled-components'

const Rules = ({showRules}) => {
  return (
    <div>
        {
            showRules ? (
                <RuleContainer>
                    <h1>How to play dice game</h1>
                <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>After click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                    <li>If you get wrong guess then  2 point will be dedcuted </li>
                </ul>
                </RuleContainer>
            ) : (
                <div></div>
            )
        }
    </div>
  )
}

export default Rules


const RuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: #FBF1F1;
    h1{
        color: #000;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    ul{
        color: #000;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 24px 0;
    }
    li{
        list-style-type: none;
        padding: 0 20px;
    }
    `;