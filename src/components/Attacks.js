import React, { useState, useEffect } from "react";

function Attack({ action, side, attackCount }) {

    const [whiteAttacks, setWhiteAttacks] = useState(0);
    const [blueAttacks, setBlueAttacks] = useState(0);
    
    useEffect(() => {
      if (action === "throw")
      {
        setWhiteAttacks(0); 
        setBlueAttacks(0); 
      }
      else{
        if (side === "white") {
          if (action === "attack") {
            setWhiteAttacks((prev) => prev + 1); // Increment attacks by 1
          } else if (action !== "attack") {
            setWhiteAttacks(0); // Reset attacks to zero
          }
        }
    
        if (side === "blue") {
          if (action === "attack") {
            setBlueAttacks((prev) => prev + 1); // Increment attacks by 1
          } else if (action !== "attack") {
            setBlueAttacks(0); // Reset attacks to zero
          }
        }
      }
      }, [attackCount]); // Depend on actionCount to re-trigger
    

    return (
        <div className='rowC'>
            <div className='marginAttack'>
                {whiteAttacks}
            </div>
            <div>
                {blueAttacks}
            </div>
        </div>
    )
}

export default Attack
