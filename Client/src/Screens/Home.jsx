import "./Styles/HomeScreen.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";



export function HomeScreen () {


    return (
        <div className="home-screen">

            <h1>Home</h1>
            <div className="puzzle-sections-buttons">
            <div className="puzzle-test1" >
            <TestPuzzleButton link="puzzletest1" text="Puzzle 1 Test"/>
            </div>
            <div className="futoshiki-button" >
            <TestPuzzleButton link="futoshikigame" text="Futoshiki 5x5"/>
            </div>
            <div className="full-sudoku-button" >
            <TestPuzzleButton link="fullsudokugame" text="Full Sudoku 9x9"/>
            </div>

            <div className="mini-sudoku-button" >
            <TestPuzzleButton link="minisudokugame" text="Mini Sudoku 6x6"/>
            </div>
            </div>
        </div>


    )
}