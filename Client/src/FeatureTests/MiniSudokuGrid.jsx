import React, { useState }  from "react";
import "./miniSudokuGrid.css";


//<button className={ isAdmin ? 'active' : null } onClick={() => handleChangeView(true)}]

export function MiniSudokuGrid (props) {
 


    
    
   /*
   y, x++
   y+ x++
[0, [012345], 1[012345]]
00 01 02 03 04 05
10 11 12 13 14 15
20 21 22 23 24 25
30 31 32 33 34 35
40 41 42 43 44 45
50 51 52 53 54 55
      
   */
    return(
      
        <div className="mini-sudoku-grid">

{/* <com xAxis={OuterLoopIndex} yAxis={loopIndex}>{p.5} ></com> */}

         {props.digits.map(p => (
          <div className="mini-grid" key={p.id}>
          
             <button id="0,0" className={`tile ${props.isSelected && 'selected'} ${(props.XAxisIsSelected || props.YAxisIsSelected )&& 'highlight-axis'}`}
      onClick={() => {props.handleSelectTile(true, 1,0); console.log(props.isSelected)}}>{p.row1[0]}</button>
             <button id="0,1"  className="tile  vertical-divide"><span>{p.row1[1]}</span></button>
             <div onClick={() => console.log("here")} className="tile">{p.row1[2]}</div>
             <div className="tile vertical-divide">{p.row1[3]}</div>
             <div className="tile">{p.row1[4]}</div>
             <div className="tile">{p.row1[5]}</div>
         
             <button type="button" id="1,0" className="tile">{p.row2[0]}</button>
             <button type="button" id="1,1" className="tile vertical-divide">{p.row2[1]}</button>
             <div className="tile">{p.row2[2]}</div>
             <div className="tile vertical-divide">{p.row2[3]}</div>
             <div className="tile">{p.row2[4]}</div>
             <div className="tile">{p.row2[5]}</div>
            
              <div className="tile horizontal-divide">{p.row3[0]}</div>
              <div className="tile horizontal-divide vertical-divide">{p.row3[1]}</div>
              <div className="tile horizontal-divide">{p.row3[2]}</div>
              <div className="tile horizontal-divide vertical-divide">{p.row3[3]}</div>
              <div className="tile horizontal-divide">{p.row3[4]}</div>
              <div className="tile horizontal-divide">{p.row3[5]}</div>
             
              <div className="tile">{p.row4[0]}</div>
              <div className="tile vertical-divide">{p.row4[1]}</div>
              <div className="tile">{p.row4[2]}</div>
              <div className="tile vertical-divide">{p.row4[3]}</div>
              <div className="tile">{p.row4[4]}</div>
              <div className="tile">{p.row4[5]}</div>
              
              <div className="tile">{p.row5[0]}</div>
              <div className="tile vertical-divide">{p.row5[1]}</div>
              <div className="tile">{p.row5[2]}</div>
              <div className="tile vertical-divide">{p.row5[3]}</div>
              <div className="tile">{p.row5[4]}</div>
              <div className="tile">{p.row5[5]}</div>

              <div className="tile">{p.row6[0]}</div>
              <div className="tile vertical-divide">{p.row6[1]}</div>
              <div className="tile">{p.row6[2]}</div>
              <div className="tile vertical-divide">{p.row6[3]}</div>
              <div className="tile">{p.row6[4]}</div>
              <div className="tile">{p.row6[5]}</div>
                
            
         </div>
         ))
     }


     </div>
    );
}


  // <div className="mini-sudoku-grid">
         
        /* <table className="mini-grid">
        <thead></thead>
        {props.digits.map(p => (
         <tbody key={p.id}>
          <tr>
            <td className="tile">{p.row1[0]}</td>
            <td className="tile">{p.row1[1]}</td>
            <td className="tile">{p.row1[2]}</td>
            <td className="tile">{p.row1[3]}</td>
            <td className="tile">{p.row1[4]}</td>
            <td className="tile">{p.row1[5]}</td>
          </tr>
            <tr>
            <td className="tile">{p.row2[0]}</td>
            <td className="tile">{p.row2[1]}</td>
            <td className="tile">{p.row2[2]}</td>
            <td className="tile">{p.row2[3]}</td>
            <td className="tile">{p.row2[4]}</td>
            <td className="tile">{p.row2[5]}</td>
            </tr>
             <tr>
             <td className="tile">{p.row3[0]}</td>
             <td className="tile">{p.row3[1]}</td>
             <td className="tile">{p.row3[2]}</td>
             <td className="tile">{p.row3[3]}</td>
             <td className="tile">{p.row3[4]}</td>
             <td className="tile">{p.row3[5]}</td>
             </tr>
               
              
        </tbody>
        ))
    }
    </table>   */