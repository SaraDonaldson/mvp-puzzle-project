
import "./Styles/landingScreen.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";
import { CreateUserAccount } from "../Components/CreateUserAccount.jsx";



export function LandingScreen () {


    return (
        <div className="landing-screen">

            <h1>Login</h1>
           
            <div className="login-guest-one" >
            <TestPuzzleButton link="home" text="Guest User One"/>
            </div>

            <div className="login-Sara" >
            <TestPuzzleButton link="home" text="Sara"/>
            </div>


            <div className="new-user" >
            <CreateUserAccount
            />
            </div>
          
        </div>


    )
}

