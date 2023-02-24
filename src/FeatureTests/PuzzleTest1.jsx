import "./PuzzleTest.css";
import React, { useEffect, useState } from "react";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";
import { MiniSudokuGrid } from "./MiniSudokuGrid";
import { NewTestGrid } from "./NewTestGrid";




// let miniSudokuData= [
//     {
//         id:1,
//         row1: "5 61 4",
//         row2: "    5 ",
//         row3: " 6   2",
//         row4: " 14   ", 
//         row5: "2  5  ",
//         row6: "  3   "
//     }
// ];
let miniSudokuSolution= [
    {
        id:2,
        row1: "526134",
        row2: "142456",
        row3: "465312",
        row4: "314625",
        row5: "241563",
        row6: "653241" 
    }
];


let miniSudokuData= {
    id:1,
    initialData: [
    [5,0,6,1,0,4,],
    [0,0,0,0,5,0,],
    [0,6,0,0,0,2,],
    [0,1,4,0,0,0,], 
    [2,0,0,5,0,0,],
    [0,0,3,0,0,0,],  
]
}
    

/* About
-----------------------------------------------
Type: mini-sudoku
Numbers: 1-6
Not mapped. This is just a solution with T/F
Features: red is incorrect, blue is correct
           number box goes grey when all are done
           when clicked number box shows current positions
           when clicked grid item highlights row-col axis 
           submit = congratulations or try again

        Empty Grid:
         =========================
         |   :   |   :   |   :   | 
         |   :   |   :   |   :   | 
         |   :   |   :   |   :   |  
         =========================
         |   :   |   :   |   :   |  
         |   :   |   :   |   :   | 
         |   :   |   :   |   :   | 
         =========================

         Solution:
          =========================
         | 5 : 2 |6  : 1 | 3 : 4 | 
         | 1 : 3 |2  : 4 | 5 : 6 | 
         | 4 : 6 |5  : 3 | 1 : 2 | 
         =========================
         | 3 : 1 |4  : 6 | 2 : 5 | 
         | 2 : 4 |1  : 5 | 6 : 3 | 
         | 6 : 5 |3  : 2 | 4 : 1 | 
         =========================


         Starting Grid
         =========================
         | 5 : 0 |6  : 1 | 0 : 4 | 
         | 0 : 0 |0  : 0 | 5 : 0 | 
         | 0 : 6 |0  : 0 | 0 : 2 | 
         =========================
         | 0 : 1 |4  : 0 | 0 : 0 | 
         | 2 : 0 |0  : 5 | 0 : 0 | 
         | 0 : 0 |3  : 0 | 0 : 0 | 
         =========================
---------------------------------------------
import 6x6 mini-sudoku grid component
conditionally render filled squares based on data
click spot on grid to type answer (only accepts 1-9)

---------------------------------------------*/

export function PuzzleTest1 (props) {
let initialData= miniSudokuData;
let solutionData= miniSudokuSolution;   
let [game, setGame] = useState(initialData);
let [currentTile, setCurrentTile]= useState(null);
let [userData, setUserData] = useState(initialData)
let [canEdit, setCanEdit]=useState(false);
const [selectedXAxis, setSelectedXAxis] = useState(false)
const [selectedYAxis, setSelectedYAxis] = useState(false)





// function highlightAllSameNumber (selectedTile){
//   find each key in game with value
//   render "same-number" style
// }

// const handleSelectTile = (selected, row, col) => {
//    console.log("ishandle select working....",selected, row, col);
//     let r= "row"+row;
//     let fullRow =[ r[0], r[1], r[2],r[3], r[4], r[5] ];
//     let fullColumn = [`row1[${col}]`, `row2[${col}]`, `row3[${col}]`,`row4[${col}]`, `row5[${col}]`, `row6[${col}]`]
//     let selectedTile = r +`[${col}]`;
//     console.log (selectedTile);
//     setCurrentTile(selectedTile);
//     console.log (currentTile);
//     setSelected(selected);
    
//     // highlightAxis (fullRow, fullColumn);
//     // highlightAllSameNumber(selectedTile);
// };



function editTile (val){
    //tile index - "currentTile"
    //if tile initial value is more than 0, then end function
    //else setGame  replace with inputvalue
  console.log("edit tile started");

  console.log(initialData);
  console.log(initialData.initialData);
  console.log(initialData.initialData[0]);
  console.log(initialData.initialData[0][0]);
  
    let x= 0;
    let y= 1;
   console.log(initialData.initialData[x][y]);
   if (initialData[x[y]] >= 0){
    //in future this will be userData put at index in array in object
    let newGameData= game[x].splice(y-1,1,val)
    //in future this set will set game data as the user data
     setGame(newGameData);
     setUserData(newGameData);
   }
   };




        function checkGame (){
        //loop through solution data and userinputdata
        //if i in user data is = to i in solution data then i++
        // else conditional css? make number red

        }

    function resetBoard (){
        setGame(initialData);
    }



    return (
      <div className="puzzle-test-1">
        
        <div className="surround">
         <div className="banner">
            <div className="back" >
                <TestPuzzleButton link="" text="back"/>
            </div>

            <h1>Puzzle Test 1</h1>

            <div className="describe-puzzle">
                <h3>Ordinary Number Mini-Sudoku</h3>
                <p>Numbers 1-6</p>
            </div>
            </div>
        </div>

        <div>
            {/* <MiniSudokuGrid 
            digits={game}
            handleSelectTile={handleSelectTile}
            isSelected= {isSelected}
            /> */}

            <NewTestGrid 
            dataObject={game}
            // handleSelectTile={handleSelectTile}
            selectedXAxis={selectedXAxis} 
            selectedYAxis ={selectedYAxis}
            setSelectedXAxis= {setSelectedXAxis}
            setSelectedYAxis={setSelectedYAxis}
            />
       

        </div>


        <div className="test-puzzle-input">
            <button type="button" id="1" onClick={(e)=>editTile(1)}>1</button>
            <button type="button" id="2" onClick={(e)=>editTile(2)}>2</button>
            <button type="button" id="3" onClick={(e)=>editTile(3)}>3</button>
            <button type="button" id="4" onClick={(e)=>editTile(4)}>4</button>
            <button type="button" id="5" onClick={(e)=>editTile(5)}>5</button>
            <button type="button" id="6" onClick={(e)=>editTile(6)}>6</button>
        </div>

        <div className="test-puzzle-buttons">
            <button onClick={e => resetBoard}>Reset Game</button>
            <button onClick={e => checkGame}>Check Answers</button>

        </div>
      </div>


    )
}