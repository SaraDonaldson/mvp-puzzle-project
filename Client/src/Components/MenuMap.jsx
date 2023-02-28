import React, { useState }  from "react";
import { MenuItemComponent } from "./MenuItemComponent.jsx";


export function MenuMap({PuzzleData, puzzleStatus, puzzleTime}) {


    return(
      
        <div className="mini-sudoku-grid">

            <div className="mini-grid">          
      
         {
         PuzzleData.map((p)  => {

                <MenuItemComponent
                key={p.id}
                gameType={p.game_type}
                puzzleTime={p.time}
                puzzleStatus={puzzleStatus}
                />
          })
                
            }
             </div>
             
     </div>
    );
}




