import React, {useState} from 'react'
import Info from './Info'
import Button from './Button';
import StopWatch from './Timer';
import Attack from './Attacks';

function MainComponent() {
const [page, setPage] = useState([]);
const [startTime, setStartTime] = useState(null);
const [isRunning, setIsRunning] = useState(false);
const [color, setColor] = useState("");
const [sideAction, setSideAction] = useState("");
const [attackCount, setAttackCount] = useState(0);

function handleClick(side, action) {
    if (startTime === null)
    {
      alert("First click on Hajime to start.");
      return;
    }

    setColor(side);
    setSideAction(action);
    setAttackCount((prev) => prev + 1);
    setPage([...page, <Info side={side} action={action} startTime={startTime}/>]);
  }

  function handleDeleteClick() {
    if (attackCount > 0) {
      setPage((prev) => prev.slice(0, -1)); // Remove the last entry
      setSideAction("delete");
      findSide(); // Find the side of the last entry
      console.log(attackCount);
      setAttackCount((prev) => prev - 1); // Decrement the attack count
      return;
    }
  }

  function findSide(){
    const lastItem = page[page.length - 1];
    if (lastItem.props.side === "white") {
      setColor("white"); 
    } else {
      setColor("blue"); 
    }
  }

  function startClick(){
    setStartTime(Date.now());
    setIsRunning(true);
  }

  function endClick(){
    setAttackCount(0);
    setStartTime(null);
    setIsRunning(false);
    setPage([]);
    
    // for reseting attacks
    setSideAction("end")
    setAttackCount(0);  
  }

  return (
    <React.Fragment>
        <Button text="Hajime" onClick={() => startClick()}/>
        <Button text="Soremade" onClick={() => endClick()}/>
        <Button text="Delete" onClick={() => handleDeleteClick()}/>

        <StopWatch isRunning={isRunning}/>
        <Attack side={color} action={sideAction} attackCount={attackCount}/>
        <div className='rowC'>
            <div className='margin'>
                <Button color="white" text="Attack" onClick={()=> handleClick("white", "attack")}/>
                <Button color="white" text="Passivity shido" onClick={()=> handleClick("white", "passivity")}/>
                <Button color="white" text="Shido" onClick={()=> handleClick("white", "shido")}/>
                <Button color="white" text="Throw" onClick={()=> handleClick("white", "throw")}/>
            </div>
            <div>
                <Button color="blue" text="Attack" onClick={()=> handleClick("blue", "attack")}/>
                <Button color="blue" text="Passivity Shido" onClick={()=> handleClick("blue", "passivity")}/>
                <Button color="blue" text="Shido" onClick={()=> handleClick("blue", "shido")}/>                
                <Button color="blue" text="Throw" onClick={()=> handleClick("blue", "throw")}/>    
            </div>
        </div>
        <div className='verticalLine'>
            { page.map((str, index) => (
                    <div key={index} className="mb-2">{str}</div>
                  ))
            }
        </div>
        
        
    </React.Fragment>
  )
}

export default MainComponent
