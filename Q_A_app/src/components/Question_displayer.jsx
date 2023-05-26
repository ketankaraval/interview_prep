import { useState } from "react";
import "./QuestionDisplayer.css"


const Question_displayer = () => {
  // let question = "what is react.js"
  const [question , setQuestion] = useState('Waiting for a question...')
  return(
    <>
    <form className="displayBox">
        <output >{question}</output>
    </form>
    
    </>
    
  )
}
 
export default Question_displayer;