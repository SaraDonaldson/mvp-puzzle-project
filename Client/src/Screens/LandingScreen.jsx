
import "./Styles/landingScreen.css";
import { TestPuzzleButton } from "../Components/TestPuzzleButtons";
import { CreateUserAccount } from "../Components/CreateUserAccount.jsx";
import LoginForm from "../Components/LoginForm";



export function LandingScreen () {


    return (
        <div className="landing-screen">

            <h1>Login</h1>
           
            {/* <div className="login-guest-one" >
            <TestPuzzleButton link="home" text="Guest User One"/>
            </div> */}

            {/* <div className="login-Sara" >
            <TestPuzzleButton link="home" text="Login"/>
            </div> */}
            <LoginForm/>

            <div className="new-user" >
            <CreateUserAccount
            />
            </div>
          
        </div>


    )
}

