
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
    cluesArray,
    incorrectTiles,
    })
    {

// let [isSelected, setIsSelected]= useState(false);
let [currentTileVal,setCurrentTileVal]= useState(tileValue);
let [isOriginalNumber,setIsOriginalNumber]= useState(false);
let [isIncorrect,setIsIncorrect]= useState(false);




useEffect(() => {
  let axisString = (xAxis.toString() + yAxis.toString())
  let answer =  cluesArray.includes(axisString)
 setIsOriginalNumber(answer)
}, [])


useEffect(() => {
  setCurrentTileVal(tileValue)
  
}, [tileValue])

// useEffect(() => {
//   let axisString = (xAxis.toString() + yAxis.toString())
//   let answer =  incorrectTiles.includes(axisString)
//   setIsIncorrect(answer)
// }, [])

async function handleClick(){
  
  console.log("click check original number: ", isOriginalNumber)
    await setChangeVal(!changeVal);
    //  setIsSelected(true); 
    handleSetBothAxis(xAxis, yAxis)
    setSelectedXAxis(xAxis);
    setSelectedYAxis(yAxis);

    // console.log("is selected?", isSelected);
}


// function IncorrectAnswer(){
//   let axisString = (xAxis.toString() + yAxis.toString())
//   let answer =  incorrectTiles.includes(axisString)
//   setIsIncorrect(answer)
// }



return(

    <button  className={`
                        tile 
                        ${(xAxis === selectedXAxis && yAxis === selectedYAxis ) && 'selected'} 
                        ${(xAxis === selectedXAxis || yAxis === selectedYAxis )&& 'highlight-axis'}
                        ${isOriginalNumber && 'original-nums'}
                        ${isIncorrect && 'incorrect-answer'}
                        ${(currentTileVal !== 0 & ! isOriginalNumber) && 'edited'} 
                        ${(xAxis === 2) && 'horizontal-divide'} 
                        ${(yAxis === 1 || yAxis === 3) && 'vertical-divide'} 

                        `}
    onClick={() => {handleClick()}}>{currentTileVal === 0 ? "": currentTileVal}</button>
  
)

}