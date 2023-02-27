import express from "express";
import db from "../helper";
const userRouter = express.Router();


// userRouter.get("/users", (req, res) => {

//   res.status(200).send({"mvp_app": ["hello app"]})
// })

// userRouter.get("/", (req, res) => {
// res.send("Welcome to the user section of mvp app");
// });


// userRouter.get("/users", (req, res) => {
//   db("SELECT * FROM users;")
//     .then(results => {
//       res.send(results.data);
//     })
//     .catch(err => res.status(500).send(err));
// })


userRouter.get("/", (req, res) => {
  db("SHOW tables;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
})

// GET user by id
userRouter.get("/:userid", function(req, res, next) {
    let userId = req.params.userid;
  db(`SELECT * FROM users where userid = ${userId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET user by username
userRouter.get("/username", function(req, res, next) {
  let username = req.params.userid;
db(`SELECT * FROM users where username = ${username};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

// INSERT a new student into the DB
userRouter.post("/", async function(req, res, next) {
  // required body
  let { username } = req.body;
  // sql syntax - insert into db (cols) values ('${info}')
  let sql = `
      INSERT INTO students (username)
      VALUES ('${firstname}')
            `;
  // async try - await - catch
  try {
    //start await insert
    await db(sql);
    // start await to recieve data
    let result = await db("SELECT * FROM users;");
    res.status(201).send(result.data);
  } catch {
    err => res.status(500).send(err);
  }
});





// // GET one puzzle - function to load puzzle
// userRouter.get("/:id", async function(req, res, next) {
//   // id req variable
//   let studentId = req.params.id;
//   // sql syntax with id
//   let sql = `SELECT * FROM students WHERE id = ${studentId}`;

//   //try catch async function
//   try {
//     //begin await with db helper function and sql syntax
//     let result = await db(sql);
//     let studentInfo = result.data;
//     //if the object is 0 then return error
//     if (studentInfo.length === 0) {
//       res.status(404).send({ error: "student profile not found" });
//       //else send info
//     } else {
//       res.send(result.data);
//     } //catch err on server
//   } catch {
//     err => res.status(500).send(err);
//   }
// });




export default userRouter;