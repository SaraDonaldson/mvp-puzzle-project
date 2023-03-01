import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CreateUserAccount } from "../Components/CreateUserAccount"
import { PuzzleTest1 } from "../FeatureTests/PuzzleTest1"
import { FullSudokuGame } from "../Screens/FullSudokuGame"
import { FutoShikiGame } from "../Screens/FutoshikiGame"
import { HomeScreen } from "../Screens/Home"
import {LandingScreen} from "../Screens/LandingScreen"
import { LevelMenu } from "../Screens/levelMenu"
import { MiniSudokuGame } from "../Screens/MiniSudokuScreen"



export function AppRouter () {

    return(
        <Router>
                <Routes>
                <Route path="/" element={<LandingScreen/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/puzzletest1" element={<PuzzleTest1/>}/>
                <Route path="/futoshikigame" element={<FutoShikiGame/>}/>
                <Route path="/fullsudokugame" element={<FullSudokuGame/>}/>
                <Route path="/minisudokugame/:id" element={<MiniSudokuGame/>}/>
                <Route path="/createaccount" element={<CreateUserAccount/>}/>
                <Route path="/levelmenu" element={<LevelMenu/>}/>
                </Routes>

        </Router>
    )
}