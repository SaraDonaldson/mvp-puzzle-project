
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
    activateCheck
    })
    {

// let [isSelected, setIsSelected]= useState(false);
let [currentTileVal,setCurrentTileVal]= useState(tileValue);
let [isOriginalNumber,setIsOriginalNumber]= useState(false);
let [checkNumbers, setCheckNumbers]= useState(activateCheck)
let [isIncorrect, setIsIncorrect] = useState(false)



useEffect(() => {
  let axisString = (xAxis.toString() + yAxis.toString())
  let answer =  cluesArray.includes(axisString)
 setIsOriginalNumber(answer)
}, [])


useEffect(() => {
  setCurrentTileVal(tileValue)
}, [tileValue])

useEffect(() => {
  if (activateCheck === false){
    setIsIncorrect(false);
  }else {
  let axisString = (xAxis.toString() + yAxis.toString())
  let answer =  incorrectTiles.includes(axisString)
  setIsIncorrect(answer)
  }
  }, [activateCheck, incorrectTiles, xAxis, yAxis])




async function handleClick(){
  
  console.log("click check original number: ", isOriginalNumber)
    await setChangeVal(!changeVal);
    handleSetBothAxis(xAxis, yAxis)
    setSelectedXAxis(xAxis);
    setSelectedYAxis(yAxis);
}





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
                        ${(currentTileVal ===1) && 'tile-one'} 
                        ${(currentTileVal ===2) && 'tile-two'} 

                        `}
    onClick={() => {handleClick()}}>{currentTileVal === 0 ? "": currentTileVal}</button>
  
)

}