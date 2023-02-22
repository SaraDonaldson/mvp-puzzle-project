import { Link } from "react-router-dom";

export function TestPuzzleButton ({link, text}){

    return(
        <Link to={`/${link}`}>
        <button>{text}</button>
        </Link>

    );

}