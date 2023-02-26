import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PuzzleTest1 } from "../FeatureTests/PuzzleTest1"
import { FullSudokuGame } from "../Screens/FullSudokuGame"
import { FutoShikiGame } from "../Screens/FutoshikiGame"
import { HomeScreen } from "../Screens/Home"


export function AppRouter () {

    return(
        <Router>
                <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/puzzletest1" element={<PuzzleTest1/>}/>
                <Route path="/futoshikigame" element={<FutoShikiGame/>}/>
                <Route path="/fullsudokugame" element={<FullSudokuGame/>}/>

                </Routes>

        </Router>
    )
}