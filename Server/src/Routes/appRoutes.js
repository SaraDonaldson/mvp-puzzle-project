import express from "express";
const router = express.Router();
const db = import("../helper");




const appRouter = express.Router();


appRouter.get("/", (req, res) => {

    res.status(200).send({"app": ["hello app"]})
})

router.get("/", (req, res) => {
  res.send("Welcome to the app");
});


// -------------------------------------------------------------
//         Get all app data
//--------------------------------------------------------------


router.get("/", (req, res) => {
  //gets all games in db

  db("SELECT * FROM app;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



// -------------------------------------------------------------
//         Get all games of type
//--------------------------------------------------------------


router.get("/app-data/:id", async (req, res) => {
    // Send back the full list of items
    let puzzleType = req.params.puzzle-type;
    let sql = `SELECT * FROM app WHERE puzzle-type = ${puzzleType} `;
  
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
//         Get Game by game id and type
//--------------------------------------------------------------

router.get("/app-data/:id", async (req, res) => {
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

export default appRouter;