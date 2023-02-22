import "./Styles/HomeScreen.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";



export function HomeScreen () {


    return (
        <div className="home-screen">

            <h1>Home</h1>
            <div className="puzzle-test1" >
            <TestPuzzleButton link="puzzletest1" text="Puzzle 1 Test"/>
            </div>
        </div>


    )
}