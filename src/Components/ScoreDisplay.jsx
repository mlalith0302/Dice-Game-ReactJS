import React from 'react'
import styled from 'styled-components'
const ScoreDisplay = ({score}) => {
  return (
    <Div>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Div>
  )
}

export default ScoreDisplay

const Div = styled.div`
    max-width: 200px;
    
    text-align: center;
    h1{
        font-size: 100px;   
        
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
    `;