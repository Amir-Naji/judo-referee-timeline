import React, {useState} from 'react'
import Info from './Info'
import Button from './Button';
import StopWatch from './Timer';

function MainComponent() {
const [page, setPage] = useState([""]);
const [startTime, setStartTime] = useState(null);
const [isRunning, setIsRunning] = useState(false);

function handleClick(side, action) {
    if (startTime === null)
    {
      alert("First click on Hajime to start.");
      return;
    }

    setPage([...page, <Info side={side} action={action} startTime={startTime}/>]);
  }

  function startClick(){
    setStartTime(Date.now());
    setIsRunning(true);
  }

  function endClick(){
    setStartTime(null);
    setIsRunning(false);
    setPage([]);
  }

  return (
    <React.Fragment>
        <Button text="Hajime" onClick={() => startClick()}/>
        <Button text="Soremade" onClick={() => endClick()}/>

        <StopWatch isRunning={isRunning}/>
        <div className='rowC'>
            <div className='margin'>
                <Button color="white" text="attack" onClick={()=> handleClick("white", "attack")}/>
                <Button color="white" text="shido" onClick={()=> handleClick("white", "shido")}/>
                <Button color="white" text="throw" onClick={()=> handleClick("white", "throw")}/>
            </div>
            <div>
                <Button color="blue" text="attack" onClick={()=> handleClick("blue", "attack")}/>
                <Button color="blue" text="shido" onClick={()=> handleClick("blue", "shido")}/>
                <Button color="blue" text="throw" onClick={()=> handleClick("blue", "throw")}/>    
            </div>
        </div>
        <div>
            { page.map((str, index) => (
                    <div key={index} className="mb-2">{str}</div>
                  ))
            }

        </div>
        
        
    </React.Fragment>
  )
}

export default MainComponent
