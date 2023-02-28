
import React,{useState, useEffect} from "react";
export function MenuItem (
    {
    
    })
    {


let [userid,setUserid]= useState();
let [gameid,setGameid]= useState();
let [username, setUsername]= useState();




async function handleClick(){
  setUserid();
  setGameid();
  setUsername();

}





return(

    <div className="menu-button" >
    <TestPuzzleButton link="minisudokugame" text="Play"
                     className={`
                        menu-item
                        `}
    onClick={() => {handleClick()}}/>
   </div>
)

}