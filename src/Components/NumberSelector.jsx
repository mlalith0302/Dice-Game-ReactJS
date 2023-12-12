import React from 'react'
import styled from 'styled-components';
const NumberSelector = ({selectedNum, setSelectedNum, error, SetError}) => {
    const array = [1,2,3,4,5,6];
    const NumSelectionHandler= (value)=>{
        setSelectedNum(value);
        SetError("");
    }
  return (
    <Wrapper>
        <p className='errorMessage'>{error}</p>
        <div className='flex'>
        {array.map((value,i)=>(
            <Box 
            key={i} 
            isSelected={value==selectedNum} 
            onClick={()=>NumSelectionHandler(value)}
            >{value}</Box>
        ))}
        </div>
        <p>Select Number</p>
    </Wrapper>

  )
}

export default NumberSelector


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props)=> props.isSelected ? "black" : "white" };
    color: ${(props)=> props.isSelected ? "white" : "black" }
    `;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        flex-direction: row;
       
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .errorMessage{
        color: red;
    }
    `;