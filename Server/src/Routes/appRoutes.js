import express from "express";
import db from "../helper.js";
const appRouter = express.Router();


// appRouter.get("", (req, res) => {

//     res.status(200).send({"app": ["hello app"]})
// })



// -------------------------------------------------------------
//         Get all app data
//--------------------------------------------------------------


appRouter.get("/", (req, res) => {
  //gets all games in db

  db("SELECT * FROM app_data;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



// -------------------------------------------------------------
//         Get all games of type
//--------------------------------------------------------------


appRouter.get("/:game_type/", async (req, res) => {
    // Send back the full list of items
    let gameType= req.params.game_type;
    let sql = `SELECT * FROM app_data WHERE game_type = 
    '${gameType}' `;
  
    try {
      let result = await db(sql);
      let itemObj = result.data;
      if (itemObj.length === 0) {
        res.status(404).send({ error: "item not found" });
      } else {
        res.send(result.data);
      }
    } catch {
      err => res.status(500).send(err);
    }
  });


// -------------------------------------------------------------
//         Get Game by game id
//--------------------------------------------------------------

appRouter.get("/id/:id", async (req, res) => {
    // Send back the full list of items
    let gameID = req.params.id;
    let sql = `SELECT * FROM app_data WHERE id = '${gameID}'; `;
  
    try {
      let result = await db(sql);
      let itemObj = result.data;
      if (itemObj.length === 0) {
        res.status(404).send({ error: "item not found" });
      } else {
        res.send(result.data);
      }
    } catch {
      err => res.status(500).send(err);
    }
  });



//post function for back office 
appRouter.post("/", async function(req, res) {
  // The request's body is available in req.body
  console.log("");
  let { game_type, start_game_data, solution_data } = req.body;
  let sql = `
  INSERT INTO app_data ( game_type, start_game_data, solution_data )
      VALUES ('${game_type}', '${start_game_data}', '${solution_data}')
      `;
  // If the query is successfull you should send back the full list of items
  try {
    await db(sql);
    let result = await db("SELECT * FROM app_data;");
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});




//put function for back office

// delete function for back office

export default appRouter;

//{"game_type": "mini-sudoku",
//"start_game_data": "[[5,0,6,1,0,4,],[0,0,0,0,5,0,],[0,6,0,0,0,2,],[0,1,4,0,0,0,],[2,0,0,5,0,0,],[0,0,3,0,0,0,],]",
//"solution_data":"[[5,0,6,1,0,4,],[0,0,0,0,5,0,],[0,6,0,0,0,2,],[0,1,4,0,0,0,], [2,0,0,5,0,0,],[0,0,3,0,0,0,],]"}