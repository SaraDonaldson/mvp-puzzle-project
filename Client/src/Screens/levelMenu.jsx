import { MenuMap } from "../Components/MenuMap";
import {useState,useEffect} from "react";
export function LevelMenu(){
    
    const [menuItems, setMenuItems] = useState([]);
    // let[appPuzzleData, setAppPuzzleData] = useState();
       
        useEffect(() => {
          getMenuItems();
           
        }, []);
      


      async function getMenuItems(){
        let gameType = "mini-sudoku";
        try {
          let response= await fetch(`http://localhost:5002/app_data/${gameType}`);
          if (response.ok){
            let puzzles= await response.json();
            setMenuItems(puzzles);
            console.log("puzzles" ,puzzles);
          }else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
        } catch (err) {
        console.log(`Server error: ${err}`);
      }
    };  

    return (
            <div className="level-sudoku-menu">
                <h1>Level Menu</h1>
            <MenuMap
            menuItems = {menuItems}
            />

            </div>
    );
}