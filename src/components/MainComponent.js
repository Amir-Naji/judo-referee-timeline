import React, {useState} from 'react'
import Info from './Info'
import Button from './Button';

function MainComponent() {
const [page, setPage] = useState([""]);
const [time, setTime] = useState();

function handleClick(side, action) {
    if (action === "attack"){
        setPage([...page, <Info color={side} text={side + " attack at: "} />]);
    }
    if (action === "shido"){
        setPage([...page, <Info color={side} text={side + " shido at: "} />]);
    }
    if (action === "throw"){
        setPage([...page, <Info color={side} text={side + " throw at: "} />]);
    }
  }

  function startClick(){

  }

  return (
    <React.Fragment>
        <Button text="Hajime" onClick={() => startClick()}/>
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
