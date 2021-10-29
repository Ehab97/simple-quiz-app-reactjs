import React, { useState, useEffect } from "react";
import questionsData from "../data/questions.json";
import SingleQuestion from "./SingleQuestion";
import Modal from "./modals/Modal";

function Questions() {
  const [result, setResult] = useState(0);
  const [counter, setCounter] = useState([]);
  const [checkArray, setCheckArray] = useState([]);
  const [data, setData] = useState(null);
  const [mount, setMount] = useState(false);
  const [feedBack, setFeedBack] = useState(false);
  const [show, setShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [ids, setId] = useState(null);
  const [check, setCheck] = useState(null);

  useEffect(async () => {
    await setData(questionsData.questions_answers);
    await setMount(true);
  }, []);
  const [isShowing, setIsShowing] = useState(false);
  console.log(questionsData, data,counter,checkArray);
  const openModalHandler = () => {
    setIsShowing(true);
  };

  const closeModalHandler = () => {
    setIsShowing(false);
  };
  const handleAnswers = (check) => {
    if (check) {
      setResult(result + 1);
    }
  };
  const getResult=async()=>{
     setResult(0)
     let res=checkArray.reduce(function(result, field, index) {
          result[counter[index]] = field;
          return result;
     }, {})
   for (var key of Object.keys(res)) {
     console.log(key + " -> " + res[key])
     if(res[key]){
     setResult(result=>result+1)
     }
 } 
  }
  const resetResult=()=>{
       let radio=document.querySelectorAll('li input[type="radio"]')
       for(let i=0; i < radio.length; i++) {
          radio[i].checked = false;
      }
       setResult(0)
       setShowResult(false)
       setShow(false)
  }
  return (
    <>
      {isShowing ? (
        <div onClick={closeModalHandler} className="back-shed"></div>
      ) : null}

      {mount && (
        <div className="container">
          <h2>{questionsData && questionsData.title}</h2>
          {data &&
            React.Children.toArray(
              data.map((item, index) => (
                <ul  id={item.id}>
                  <h3>{data && item.text}</h3>
                  {data[index].answers &&
                    React.Children.toArray(
                      data[index].answers.map((answer, i) => (
                        <>
                          <SingleQuestion
                            answer={answer}  
                            index={index}
                            id={item.id}
                            handleAnswers={handleAnswers}
                            setShow={setShow}
                            ids={ids}
                            setId={setId}
                            setCheck={setCheck}
                            setCounter={setCounter}  
                            setCheckArray={setCheckArray}
                            setShowResult={setShowResult}
                          />
                        </>
                      ))
                    )}
                  <span>
                    {ids == item.id && show ? (
                      !check ? (
                        <span className="bg-red">
                          {`question ${index + 1} false feedback`}
                        </span>
                      ) : (
                        <span className="bg-green">
                          {`question ${index + 1} true feedback`}
                        </span>
                      )
                    ) : null}
                  </span>
                </ul>
              ))
            )}

          <div className="controlers">      
          <button className="open-modal-btn btn" onClick={()=>{openModalHandler();setShowResult(false)}}>
            Add Quiz
          </button>
          <button className="open-modal-btn btn" onClick={()=>{setShowResult(!showResult);getResult()}}>
            show result
          </button>
          <button className="open-modal-btn btn" onClick={()=>{resetResult()}}>
            reset 
          </button>
          </div>
          <div>
          <span className="result">{showResult&&result}</span>
          </div>
        </div>
      )}
      <Modal
        className="modal"
        show={isShowing}
        close={closeModalHandler}
        setData={setData}
        data={data}
      ></Modal>
    </>
  );
}

export default Questions;
