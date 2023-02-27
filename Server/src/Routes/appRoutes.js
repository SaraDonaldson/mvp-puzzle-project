import express from "express";
const router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the app");
});

router.get("/app", (req, res) => {
  // Send back the full list of items

  db("SELECT * FROM app;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/app/:id", async (req, res) => {
  // Send back the full list of items
  let itemID = req.params.id;
  let puzzleType = req.params.puzzle-type;
  let sql = `SELECT * FROM app WHERE id = ${itemID} and puzzle-type = ${puzzleType} `;

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

//put function for back office

// delete function for back office

export default appRoutes;