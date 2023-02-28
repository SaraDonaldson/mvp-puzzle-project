import { useEffect } from "react";
import { useParams } from "react-router-dom";


export function MiniSudokuGame (){

const {id} = useParams()
useEffect(() => {
  console.log("the url ID:", id)
}, [])




     return (
            <div className="mini-sudoku-game">
                <h1>Mini Sudoku</h1>


            </div>

    );
}