import React, { useState }  from "react";
import "./miniSudokuGrid.css";


//<button className={ isAdmin ? 'active' : null } onClick={() => handleChangeView(true)}]

export function MiniSudokuGrid (props) {
    let [isSelected, setSelected] = useState(false);


    function classNamesfn(...args) {
        return args.filter(Boolean).join(' ')
      };
    
   /*

   */
    return(
      
        <div className="mini-sudoku-grid">
         
       
         {props.digits.map(p => (
          <div className="mini-grid" key={p.id}>
          
             <button id="0,0" className={classNamesfn('tile', isSelected && 'selected')}
      onClick={() => handleSelectTile(true, 1,0)}>{p.row1[0]}</button>
             <button id="0,1"  className="tile  vertical-divide">{p.row1[1]}</button>
             <div className="tile">{p.row1[2]}</div>
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