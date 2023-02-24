
import React,{useState, useEffect} from "react";
export function TileButton (
    {
    handleSetBothAxis,
    selectedXAxis, 
    selectedYAxis, 
    setSelectedXAxis, 
    setSelectedYAxis, 
    tileValue, 
    xAxis, yAxis, 
    setChangeVal, 
    changeVal, 
    clues
    })
    {

let [isSelected, setIsSelected]= useState(false);



async function handleClick(){
    await setChangeVal(!changeVal);
     setIsSelected(true); 
    handleSetBothAxis(xAxis, yAxis)
    setSelectedXAxis(xAxis);
    setSelectedYAxis(yAxis);

    console.log(isSelected);
}

useEffect(() => {
  setIsSelected(false)
}, [changeVal])  

// let isClue= clues.some(c=> c === [xAxis, yAxis])
/* ${(tileValue !== 0) && 'clue'} 
  // ${(clues.includes([xAxis,yAxis])) && 'clue'}
    ${(clues.some(c=> c === [xAxis, yAxis])) && 'clue'}
                        */

return(

    <button  className={`
                        tile 
                        ${isSelected && 'selected'} 
                        ${(xAxis === selectedXAxis || yAxis === selectedYAxis )&& 'highlight-axis'}
                      
                        ${(tileValue !== 0) && 'edited'} 
                        ${(xAxis === 2) && 'horizontal-divide'} 
                        ${(yAxis === 1 || yAxis === 3) && 'vertical-divide'} 

                        `}
    onClick={() => {handleClick()}}>{tileValue === 0 ? "": tileValue}</button>
  
)

}