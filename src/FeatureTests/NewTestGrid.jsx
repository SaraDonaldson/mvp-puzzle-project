import React, { useState }  from "react";
import "./miniSudokuGrid.css";
import { TileButton } from "./TileComponent";


export function NewTestGrid ({dataObject,handleSetBothAxis, cluesArray,incorrectTiles}) {
    // handleSetXAxiscb2, handleSetYAxiscb2,
const [changeVal, setChangeVal] = useState(false)
const [selectedXAxis, setSelectedXAxis] = useState(false)
const [selectedYAxis, setSelectedYAxis] = useState(false)




    return(
      
        <div className="mini-sudoku-grid">

            <div className="mini-grid" key={dataObject.id}>          
      
         {dataObject.initialData && dataObject.initialData.map((arr, xAxis)  => {

             return arr.map((val, yAxis) => 
                <TileButton
                // key={Math.random() + xAxis}
                key={ xAxis.toString()+ yAxis.toString()}
                handleSetBothAxis={handleSetBothAxis}
                selectedXAxis={selectedXAxis} 
                selectedYAxis ={selectedYAxis}
                setSelectedXAxis= {setSelectedXAxis}
                setSelectedYAxis={setSelectedYAxis}
                tileValue= {val}
                xAxis= {xAxis}
                yAxis={yAxis}
                // handleSetXAxiscb = {handleSetXAxiscb2}
                // handleSetYAxiscb = {handleSetYAxiscb2}
                changeVal= {changeVal}
                setChangeVal = {setChangeVal}
                cluesArray= {cluesArray}
                incorrectTiles={incorrectTiles}

                />
                
                )
                
            }
             
                
            
             )}
             </div>

             
     </div>
    );
}