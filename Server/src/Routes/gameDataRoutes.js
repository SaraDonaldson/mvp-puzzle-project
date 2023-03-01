import express from "express";
const router = express.Router();
import db from "../helper.js";
const gameDataRouter = express.Router();


// gameDataRouter.get("/user_game_data", (req, res) => {

//     res.status(200).send({"mvp_app": ["hello app"]})
// })

// gameDataRouter.get("/", (req, res) => {
//   res.send("Welcome to the game section of mvp app");
// });

gameDataRouter.get("/", (req, res) => {
  db("SELECT * FROM user_game_data;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
})


gameDataRouter.get("/:game_type/", async (req, res) => {
  // Send back the full list of items
  let gameType= req.params.game_type;
  let sql = `SELECT * FROM user_game_data WHERE game_type = 
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



//get by initial game id
gameDataRouter.get("/game_id/:id", async (req, res) => {
  // Send back the full list of items
  let gameID = req.params.game_id;
  let sql = `SELECT * FROM user_game_data WHERE game_id = '${gameID}'; `;

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

//get by user_id
gameDataRouter.get("/user_key/:id", async (req, res) => {
  // Send back the full list of items
  let userID = req.params.user_key;
  let sql = `SELECT * FROM user_game_data WHERE user_key = '${userID}'; `;

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

//get by game id with user id
gameDataRouter.get("/user_key/game_id", async (req, res) => {
  // Send back the full list of items
  let userID = req.params.user_key;
  let gameID = req.params.game_id;

  let sql = `SELECT * FROM user_game_data WHERE user_key = '${userID}' AND game_id = '${gameID}'; `;

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

//put by id
gameDataRouter.put("/id", async (req, res) => {
  let ID = req.params.id;
  let {game_data, started_game, completed_game, time_save} = req.body;
  let sql = `
          UPDATE user_game_data  SET 
          game_data = '${game_data}', 
          started_game= '${started_game}', 
          completed_game= '${completed_game}',
          time_save= '${time_save}'
          WHERE game_id = ${ID}
     `;
  try {
    await db(sql);
    let result = await db("SELECT * FROM user_game_data ;");
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


//put time by id


//


//post
gameDataRouter.post("/", async function(req, res) {
  // The request's body is available in req.body
  console.log("");
  let { user_key, game_type, game_id, game_data, started_game, completed_game, time_save} = req.body;
  let sql = `
  INSERT INTO user_game_data (user_key, game_type, game_id, game_data, started_game, completed_game, time_save )
      VALUES ('${user_key}','${game_type}', '${game_id}', '${game_data}', 0, 0, 0)
      `;
  try {
    await db(sql);
    let result = await db("SELECT * FROM user_game_data;");
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


export default gameDataRouter;
