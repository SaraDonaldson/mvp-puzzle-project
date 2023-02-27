
import "./Styles/landingScreen.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";



export function LandingScreen () {


    return (
        <div className="landing-screen">

            <h1>Login/Landing</h1>
           
            <div className="login-guest-one" >
            <TestPuzzleButton link="home" text="Guest User One"/>
            </div>

              
            <div className="login-guest-two" >
            <TestPuzzleButton link="home" text="Guest User Two"/>
            </div>
          
        </div>


    )
}

