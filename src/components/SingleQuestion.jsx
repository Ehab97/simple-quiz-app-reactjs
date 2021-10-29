import React, { useState } from 'react'

function SingleQuestion({
     index,
     handleAnswers,
     id,
     setShow,
     setId,
     setCheck,
     setCounter,
     answer,
     setCheckArray,
     setShowResult

}) {

     return (
          <>
          <li>
              <input type={'radio'} id={answer.id} value={answer.is_true} name={`quest-${index}`} 
              onChange={()=>{
                    handleAnswers(answer.is_true);
                    setId(id);
                    setShow(true);
                    setCheck(answer.is_true);
                    setCounter(counter=>[...counter,id])  
                    setCheckArray(checkArray=>[...checkArray,answer.is_true])  
                    setShowResult(false)
                   }} />   {answer.text}       
          </li>
         
          </>
     )
}

export default SingleQuestion
