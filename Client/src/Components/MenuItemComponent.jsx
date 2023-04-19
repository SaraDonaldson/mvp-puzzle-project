import React, { useState, useEffect } from "react";
import { TestPuzzleButton } from "./TestPuzzleButtons";
export function MenuItemComponent({id}) {
  // let [userid,setUserid]= useState();
  // let [gameid,setGameid]= useState();
  // let [username, setUsername]= useState();
  let buttonText = `play level ${id}`

// add if statement
// if game shows as played by user
// include the time played and complete/incomplete status

  // async function handleClick(){
  //   setUserid();
  //   setGameid();
  //   setUsername();

  // }

  return (
    <div className="menu-button">
      <TestPuzzleButton
        link={`minisudokugame/${id}`}
        text= {buttonText}
        // className={`menu-item`}
        // onClick={() => {handleClick()}}
      />
    </div>
  );
}