import "./PuzzleTest.css";
import React, { useEffect, useState } from "react";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";
import { NewTestGrid } from "./NewTestGrid";
import Timer from "../Components/Timer";



let miniSudokuSolution= {
        id:2,
        data: [
        [5,2,6,1,3,4],
        [1,4,2,4,5,6],
        [4,6,5,3,1,2],
        [3,1,4,6,2,5],
        [2,4,1,5,6,3],
        [6,5,3,2,4,1],
     ]
    };


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
};



let userSudokuData= {
    id:1,
    initialData: [
    [5,0,6,1,0,4,],
    [0,0,0,0,5,0,],
    [0,6,0,0,0,2,],
    [0,1,4,0,0,0,], 
    [2,0,0,5,0,0,],
    [0,0,3,0,0,0,],  
]
};

/*---------------------------------------------*/

export function PuzzleTest1 (props) {
let initialData= miniSudokuData;
let userData= userSudokuData;
let solutionData= miniSudokuSolution;   
let cluesArray = handleClues();

let [game, setGame] = useState(userData);
let [objectX, setObjectX] =useState();
let [objectY, setObjectY] =useState();




function handleSetBothAxis(xAxis, yAxis){
   setObjectY(yAxis);
   setObjectX(xAxis);
}

function handleClues() {
    let initialClues= [];
    let xcount= 0;
    let ycount= 0;
    let dataKey= initialData.initialData;

    for (let i of dataKey){
        for (let j of i){
        if(xcount <= dataKey.length){
                let val= dataKey[xcount][ycount];
        if ( val !== 0){
        let xstring = xcount.toString();
        let ystring = ycount.toString();           
            initialClues.push(xstring+ystring);
            }  ycount+=1;
        }
    } xcount += 1; 
    ycount = 0;  
}   
    return initialClues
}


async function editTile (val){
  console.log("edit tile started");
  console.log("x axis: ", objectX);
  console.log("y axis: ", objectY);
 
    if (initialData.initialData[objectX][objectY] <= 0){
    //in future this will be userData put at index in array in object
        userData.initialData[objectX][objectY] = val
        // await setGame();
    // game.initialData[objectX][objectY] = val  
    //  await console.log("data", game);
   }
   };







function checkGame (){
    let incorrectAnswers= [];
    let correct= 0;
    let solutionKey= solutionData.data;
    let userKey= userData.initialData;
    console.log("checkgame function started");
    if (solutionKey === userKey){
    console.log("Everything is correct!");
    //start Game is won function
 } 
else{ 
    for(let i= 0; i <= 5; i++){
        for(let j=0; j<= 5; j++){
        if (solutionKey[i][j] !== userKey[i][j]){
            let xstring = i.toString();
            let ystring = j.toString();
            incorrectAnswers.push(xstring+ystring);
        } else if (solutionKey[i][j] === userKey[i][j]){
            correct+=1;
        }   
        }  
    }    console.log("number of correct answers:", correct);
        console.log("number of incorrect answers:", incorrectAnswers.length);
        console.log("incorrect: ", incorrectAnswers);
         return incorrectAnswers;
}   

}


    function resetBoard (){
        // setGame(initialData);
        // let initialClues= [];
        // let xcount= 0;
        // let ycount= 0;
        // let dataKey= initialData.initialData;
    
    //     for (let i of dataKey){
    //         for (let j of i){
    //         if(xcount <= dataKey.length){
    //                 let val= dataKey[xcount][ycount];
    //         if ( val !== 0){
    //         // console.log("val: ", val); 
    //         // console.log(xcount,ycount);
    //         let xstring = xcount.toString();
    //         let ystring = ycount.toString();
            
    //         initialClues.push(xstring+ystring);
            
    //             }  ycount+=1;
    //         }
    //     } xcount += 1; 
    //     ycount = 0;  
    // }   
    //     console.log(initialClues);
    //     // setClues(initialClues);
    //     return initialClues;
    }




    function deleteNumber(){
        console.log("del number started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (initialData.initialData[objectX][objectY] === 0){
              userData.initialData[objectX][objectY] = 0;}
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
            <Timer/>
        </div>

        <div>
        

            <NewTestGrid 
            handleSetBothAxis={handleSetBothAxis}
            dataObject={game}
            // handleSetXAxiscb2 = {handleSetXAxis2}
            // handleSetYAxiscb2 = {handleSetYAxis2}
            cluesArray={cluesArray}
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
            <button type="button" onClick={(e)=>resetBoard()}>Reset Game</button>
            <button type="button" onClick={(e)=>checkGame()}>Check Answers</button>
            <button type="button" onClick={(e)=>deleteNumber()}>del</button>

        </div>
      </div>


    )
}