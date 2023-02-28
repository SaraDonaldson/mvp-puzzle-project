import React, { useEffect, useState }  from "react";
import { MenuItemComponent } from "./MenuItemComponent.jsx";


export function MenuMap({menuItems, puzzleStatus, puzzleTime}) {

useEffect(() => {
  console.log("working", menuItems)
}, [menuItems])

    return(
      
        <div className="menu-items">
                
         {menuItems.length > 0 ?
        menuItems.map(p=> 
       

             <MenuItemComponent
                key={p.id}
                id={p.id}
                gameType={p.game_type}
                // puzzleTime={p.time}
                // puzzleStatus={puzzleStatus}
                />
          ): <p>no items</p>
                
            }
          
     </div>
    );
}




