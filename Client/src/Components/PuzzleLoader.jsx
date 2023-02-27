import React, { useEffect, useState } from "react";
import MenuMap from "./MenuMap.jsx";


export default function App() {
  let [menuData, setMenuData] = useState();
  let userId= currentUserId;
  let currentPuzzleType = selectedPuzzleType;
  let puzzleApi='http://localhost:5002/app';
  let userData = `http://localhost:5002/gamedata/`;

//   useEffect(() => {
//     // fetch("/api/todos")
//     //   .then(res => res.json())
//     //   .then(json => {
//       //   console.log(json);
//       // })
//     loadMenu();
//         // upon success, update tasks
    
//         // upon failure, show error message
//   }, []);




// to get app data
  async function getAppPuzzlesByType(puzzletype){
    try {
      let response= await fetch (`${puzzleApi}/`);
      if (response.ok){
        let tasks= await response.json();
        setTasks(tasks);
        console.log(tasks);
      }else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
    }
    } catch (err) {
    console.log(`Server error: ${err.message}`);
  }
};  
    
//get user data - all puzzles which match puzzle type and have user id
async function getUserPuzzlesByType(puzzletype, userId){
   //function get all puzzles of type with user id 
   
    try {
      let response= await fetch (`${userData}/`);
      if (response.ok){
        let userGames= await response.json();
        setUserPuzzles(userGames);
        console.log(userGames);
      }else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
    }
    } catch (err) {
    console.log(`Server error: ${err.message}`);
  }
};  


//load user data to compare with initialdata
// get all puzzles of type with user id
// get all app puzzles of type
// if puzzle id exists
// if puzzle id started = 1
// show user puzzle
// if user started = 0
// show app data

async function LoadMenu(puzzle, user){
  let appPuzzles= getAppPuzzlesByType(puzzleType);
  let userPuzzles= getUserPuzzlesByType(puzzleType,userId);
  let menu= {};
//loop through puzzle ids here
// user puzzle 
   if(userPuzzles === appPuzzles){
    menu.push(userPuzzle.i);
   }else {
    menu.push(userPuzzle.i);
   }

   setMenuData(menu);
};  


//copy initial array

  const handleSelect = (event) => {
    // setInput(event.target.value)
    let {value } = event.target;
    setInput(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(input);
    setInput('');
  }

  const addNewPuzzleToUser = async (puzzle) => {
    let copyOfInitialArray= copyinitialarray(puzzle);
    let gameID= copyGameID(puzzle)
    let puzzleType= currentPuzzleType;

      let options= {
        method: "POST",
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify({ 
                "type": `${puzzleType}`, 
                "game-id":`${gameID}`,
                "game-data": `${copyOfInitialArray}`,
                 "started": 0,
                 "complete":0,
                 "timer": "00:00",
                 "user-key": `${userId}`
    })};
    try { 
     let response= await fetch(`${userData}`, options); 
     if (response.ok) {
        let tasks = await response.json();
        setTasks(tasks);
    }  else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
  }
} catch (err) {
  console.log(`Server error: ${err.message}`);
}
  }




  const deleteTask = (id) => {
    // delete task from database
    // upon success, update tasks
    // upon failure, show error message
  }


  // function toggleDone(id) {
  //   // Make a copy of state
  //   let newAllItems = [...allItems];
  //   // Find the item to modify
  //   let item = newAllItems.find(i => i.id === id);
  //   // Toggle the 'done' property
  //   item.done = !item.done;
  //   // Update state
  //   setAllItems(allItems => newAllItems);
  // }






  ///To go inside of Game
  const updateGame = async (puzzleId, userId) => {
   
    let puzzle= game-data.find(p=> p.id === id)
    try { 
      let response=  await fetch(`${userData}${id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({ 
        "type": `${puzzleType}`, 
        "game-id":`${gameID}`,
        "game-data": `${UpdatedGameData}`,
         "started": 1,
         "timer": `${time}`,
         "user-key": `${userId}`
})});
     if (response.ok) {
       let puzzle = await response.json();
       setGameData(puzzle);
     }  else {
       console.log(`Server error: ${response.status} ${response.statusText}`);
   }
 } catch (err) {
   console.log(`Server error: ${err.message}`);
 }
  }





// need to dynamically generate the h1 and info

  return (
    <div className="puzzle-menu">
      <div className="puzzle-list">
      <h1>Puzzles</h1>
         <MenuMap
    /* mapped puzzles from db - includes buttons to load puzzle by id 
    which route to the puzzle screen and passes it the puzzle info
    sending menu data to component as prop */
             />

      </div>
    </div>
  );
}
