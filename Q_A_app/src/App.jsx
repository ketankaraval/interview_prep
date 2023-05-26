// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Question_displayer from './components/Question_displayer'
// import StartButton from './components/StartButton'
import Timer from './components/Timer'

function App() {


  return (
    <div className='main-container'>
      <div className="container">
        <h1>React.js</h1>
        
        <Question_displayer></Question_displayer>
        {/* <StartButton></StartButton> */}
        <Timer></Timer>
      </div>
      <div className="container">
        <h1>Javascript</h1>
        <Question_displayer></Question_displayer>
        {/* <StartButton></StartButton> */}
        <Timer></Timer>
      </div>
      
    
    </div>
  )
}

export default App
