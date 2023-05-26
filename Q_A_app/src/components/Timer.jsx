import { useState , useEffect} from "react"
import './Timer.css'
const Timer = () =>{

    const[seconds, setSeconds] = useState(45)
    const[isActive, setIsActive] = useState(false)
    const[textColor, setTextColor] = useState('black')
     

    useEffect(()=>{
        let interval = null;
        
        if(isActive && seconds > 0 ){
            if(seconds <= 10){
                console.log()
                setTextColor('red')
            }
            interval = setInterval(()=>{
                setSeconds(prevSeconds => (prevSeconds-1))
            },1000)
        } else if(seconds === 0){
            clearInterval(interval)
        } 
       
        return () => {
            clearInterval(interval);
          }

    },[isActive, seconds])
   
    const startTimer = () => {
        setIsActive(true);
        openQuestion();

      };
    
      const resetTimer = () => {
        setTextColor('black')
        setIsActive(false);
        setSeconds(45);
      }

    return(
      <div>
         <button className = "str-btn" onClick={startTimer}>Start</button>
         <h2 style={{color: textColor}}>{seconds}</h2>
         <button className = "reset-btn" onClick={resetTimer}>Reset</button>
      </div>
    )
}
export default Timer