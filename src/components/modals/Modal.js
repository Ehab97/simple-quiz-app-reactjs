import React, { useState } from "react";

const Modal = (props) => {
  const [title,setTitle]=useState('')
  const [quiz1,setquiz1]=useState('')
  const [quiz2,setquiz2]=useState('')
  const [quiz3,setquiz3]=useState('')
  const [quiz4,setquiz4]=useState('')

  const setInput = (setter) => (event) => {
    setter(event.currentTarget.value);
  };
  const addQuiz=()=>{
    let payload={
      text:title,
      id:Math.random().toString(16).slice(2),
      answer_id:null,
      feedback_false: "question 1 false feedback",
      feedback_true: "question 1 true feedback",
      answers:[
        {
          id:Math.random().toString(16).slice(2),
          text:quiz1,
          is_true:false
        },
        {
          id:Math.random().toString(16).slice(2),
          text:quiz2,
          is_true:true
        },
        {
          id:Math.random().toString(16).slice(2),
          text:quiz3,
          is_true:false
        },
        {
          id:Math.random().toString(16).slice(2),
          text:quiz4,
          is_true:false
        },

      ]
    }
    const updateAnswers = [
      ...props.data,
      payload
 ];
 props.setData(updateAnswers);
    
  }
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h2>Modal Header</h2>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
       
          <ul style={{listStyle:'none',borderBottom:'none',paddingBottom:'5px',paddingInlineStart:'55px'}}>
          <li>
            <input type="text"  value={title} placeholder="title quiz" onChange={setInput(setTitle)}/>

            </li>
          </ul>
          <ul>
           
            <li>
              <input type="text"  value={quiz1} placeholder="quiz -1" onChange={setInput(setquiz1)}/>

            </li>
            <li><input type="text"  value={quiz2} placeholder="quiz -2" onChange={setInput(setquiz2)}/></li>
            <li><input type="text"  value={quiz3} placeholder="quiz -3" onChange={setInput(setquiz3)}/></li>
            <li><input type="text"  value={quiz4} placeholder="quiz -4" onChange={setInput(setquiz4)}/></li>
          </ul>
        </div>
     
       <div style={{textAlign:'center',marginTop:'0'}}>
       <button className="btn" 
        style={{width:'100px',fontSize:'16px',margin:'10px auto',textAlign:'center'}}
        onClick={()=>{
          addQuiz();
          props.close();}}>
       add Quiz
     </button>
       </div>
      </div>
    </div>
  );
};

export default Modal;
