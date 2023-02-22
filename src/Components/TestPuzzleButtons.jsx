import { Link } from "react-router-dom";

export function TestPuzzleButtons ({link, text}){

    return(
        <Link to={`/${link}`}>
        <button>{text}</button>
        </Link>

    );

}