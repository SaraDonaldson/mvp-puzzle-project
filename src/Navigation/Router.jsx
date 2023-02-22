import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PuzzleTest1 } from "../FeatureTests/PuzzleTest1"
import { HomeScreen } from "../Screens/Home"


export function AppRouter () {

    return(
        <Router>
                <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/puzzletest1" element={<PuzzleTest1/>}/>


                </Routes>

        </Router>
    )
}