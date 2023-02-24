import React, { useState }  from "react";
import "./miniSudokuGrid.css";
import { TileButton } from "./TileComponent";


export function NewTestGrid ({dataObject}) {
 
const [changeVal, setChangeVal] = useState(false)
const [selectedXAxis, setSelectedXAxis] = useState(false)
const [selectedYAxis, setSelectedYAxis] = useState(false)
// const [changeVal, setChangeVal] = useState(false)

    

    return(
      
        <div className="mini-sudoku-grid">

            <div className="mini-grid" key={dataObject.id}>          
      
         {dataObject.initialData.map((arr, xAxis)  => {

             return arr.map((val, yAxis) => 
                <TileButton
                selectedXAxis={selectedXAxis} 
                selectedYAxis ={selectedYAxis}
                setSelectedXAxis= {setSelectedXAxis}
                setSelectedYAxis={setSelectedYAxis}
                 initialValue= {val}
                 xAxis= {xAxis}
                 yAxis={yAxis}
                //  handleSelectTile={isSelected}
                 changeVal= {changeVal}
                 setChangeVal = {setChangeVal}
                />
                
                )
                
            }
             
                
            
             )}
             </div>


     </div>
    );
}