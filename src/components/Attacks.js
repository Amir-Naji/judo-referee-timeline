import React, { useState, useEffect } from "react";

function Attack({ action, side, attackCount }) {

    const [whiteAttacks, setWhiteAttacks] = useState(0);
    const [blueAttacks, setBlueAttacks] = useState(0);
    
    useEffect(() => {
      if (action === "throw" || action === "end") {
        setWhiteAttacks(0); 
        setBlueAttacks(0); 
      }
      else{
        if (side === "white") {
          if (action === "attack") {
            setWhiteAttacks((prev) => prev + 1); // Increment attacks by 1
          } else if (action === "passivity") {
            setWhiteAttacks(0); // Reset attacks to zero
          } else if (action === "delete") {
            setWhiteAttacks((prev) => prev - 1); // Decrement attacks by 1
          } 
        }
    
        if (side === "blue") {
          if (action === "attack") {
            setBlueAttacks((prev) => prev + 1); // Increment attacks by 1
          } else if (action === "passivity") {
            setBlueAttacks(0); // Reset attacks to zero
          } else if (action === "delete") {
            setBlueAttacks((prev) => prev - 1); // Decrement attacks by 1
          } 
        }
      }
      }, [attackCount, action, side]); // Depend on actionCount to re-trigger 
    

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
