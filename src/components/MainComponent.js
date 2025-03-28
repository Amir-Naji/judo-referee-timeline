import React, {useState} from 'react'
import Info from './Info'
import Button from './Button';

function MainComponent() {
const [page, setPage] = useState([""]);
const [startTime, setStartTime] = useState(null);
const [timeDiff, setTimeDiff] = useState(null);

function handleClick(side, action) {
    setPage([...page, <Info side={side} action={action} startTime={startTime}/>]);
  }

  function startClick(){
    console.log("here");
    setStartTime(Date.now());
    setTimeDiff(null);
  }

  function endClick(){
    setStartTime(null);
    setTimeDiff(null);
  }

  return (
    <React.Fragment>
        <Button text="Hajime" onClick={() => startClick()}/>
        <Button text="Soremade" onClick={() => endClick()}/>
        
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
