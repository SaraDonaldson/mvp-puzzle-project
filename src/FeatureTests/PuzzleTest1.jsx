import "./PuzzleTest.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";

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

---------------------------------------------*/

export function PuzzleTest1 () {







    return (
      <div className="puzzle-test-1">
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


    )
}