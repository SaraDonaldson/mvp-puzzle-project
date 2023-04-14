import react, {useState} from "react";


export function CreateUserAccount (){
let [userId, setUserId] = useState();
let [username, setUsername] = useState();
let [input, setInput] = useState();


    const addUser= async (UserInput) => {
    
        let options= {
          method: "POST",
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify({ username: input })
        };
      try { 
       let response= await fetch('http://localhost:5002/users/', options); 
       if (response.ok) {
          let tasks = await response.json();
          setUsername(UserInput);
      }  else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
        }


async function getUserId(){
       try {
         let response= await fetch (`http://localhost:5002/users/username/${username}`);
         if (response.ok){
           let userData= await response.json();
           setUserId(userData.id);
           console.log("user data", userData.id, "user id", userData.id);
         }else {
           console.log(`Server error: ${response.status} ${response.statusText}`);
       }
       } catch (err) {
       console.log(`Server error: ${err.message}`);
     }
   };  


   const handleChange = (event) => {
    // setInput(event.target.value)
    let {value} = event.target;
    setInput(value);
  }     

    const handleSubmit = async (event) => {
        event.preventDefault();
       await addUser(input);
        getUserId(input);
        setInput('');
      }

    return(
        <div className="new-user">
        <form onSubmit={e => handleSubmit(e)}>
        <input
        type="text"
        placeholder= "create a username"
        name="username"
        value = {input}
        onChange={e => handleChange(e)} 
        />
        <button type="submit">Sign Up</button>

        </form>                           


        </div>

    );

}