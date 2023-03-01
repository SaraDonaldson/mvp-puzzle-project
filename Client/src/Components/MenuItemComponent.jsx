import React, { useState, useEffect } from "react";
import { TestPuzzleButton } from "./TestPuzzleButtons";
export function MenuItemComponent({id}) {
  // let [userid,setUserid]= useState();
  // let [gameid,setGameid]= useState();
  // let [username, setUsername]= useState();

  // async function handleClick(){
  //   setUserid();
  //   setGameid();
  //   setUsername();

  // }

  return (
    <div className="menu-button">
      <TestPuzzleButton
        link={`minisudokugame/${id}`}
        text="Play"
        // className={`menu-item`}
        // onClick={() => {handleClick()}}
      />
    </div>
  );
}