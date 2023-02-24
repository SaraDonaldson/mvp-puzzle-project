import React,{useState, useEffect} from "react";
export function TileButton ({selectedXAxis, selectedYAxis, initialValue, xAxis, yAxis, handleSelectTile, setChangeVal, changeVal, setSelectedXAxis, setSelectedYAxis}){

let [isSelected, setIsSelected]= useState(false);

async function handleClick(){
    await setChangeVal(!changeVal);
    setIsSelected(true); 
    setSelectedXAxis(xAxis);
    setSelectedYAxis(yAxis)
    console.log(isSelected);
}

useEffect(() => {
  setIsSelected(false)
}, [changeVal])  


return(

    <button  className={`
                        tile 
                        ${isSelected && 'selected'} 
                        ${(xAxis === selectedXAxis || yAxis === selectedYAxis )&& 'highlight-axis'}
                        ${(initialValue !== 0) && 'clue'}  
                        ${(xAxis === 2) && 'horizontal-divide'} 
                        ${(yAxis === 1 || yAxis === 3) && 'vertical-divide'}       
                        `}
    onClick={() => {handleClick()}}>{initialValue === 0 ? "": initialValue}</button>
)

}