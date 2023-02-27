import express from "express";
const router = express.Router();
// const db = import("../helper");




const gameDataRouter = express.Router();


gameDataRouter.get("/user_game_data", (req, res) => {

    res.status(200).send({"mvp_app": ["hello app"]})
})

gameDataRouter.get("/", (req, res) => {
  res.send("Welcome to the game section of mvp app");
});

gameDataRouter.get("/games", (req, res) => {
  db("SELECT * FROM user_game_data;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
})

export default gameDataRouter;