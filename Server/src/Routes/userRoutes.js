import express from "express"
// const db = require("../model/helper");


const userRouter = express.Router();


userRouter.get("/all-users", (req, res) => {

    res.status(200).send({"users": ["john"]})
})

// GET all of user's puzzles
router.get("/userid", function(req, res, next) {
    let userstudentId = req.params.userid;
  db(`SELECT * FROM gamedata where userid = ${userId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one puzzle - function to load puzzle
router.get("/:id", async function(req, res, next) {
  // id req variable
  let studentId = req.params.id;
  // sql syntax with id
  let sql = `SELECT * FROM students WHERE id = ${studentId}`;

  //try catch async function
  try {
    //begin await with db helper function and sql syntax
    let result = await db(sql);
    let studentInfo = result.data;
    //if the object is 0 then return error
    if (studentInfo.length === 0) {
      res.status(404).send({ error: "student profile not found" });
      //else send info
    } else {
      res.send(result.data);
    } //catch err on server
  } catch {
    err => res.status(500).send(err);
  }
});

// // INSERT a new student into the DB
// router.post("/", async function(req, res, next) {
//   // required body
//   let { firstname, lastname } = req.body;
//   // sql syntax - insert into db (cols) values ('${info}')
//   let sql = `
//       INSERT INTO students (firstname, lastname)
//       VALUES ('${firstname}', '${lastname}' )
//             `;
//   // async try - await - catch
//   try {
//     //start await insert
//     await db(sql);
//     // start await to recieve data
//     let result = await db("SELECT * FROM students;");
//     res.status(201).send(result.data);
//   } catch {
//     err => res.status(500).send(err);
//   }
// });

// // DELETE a student from the DB
// router.delete("/:id", async function(req, res, next) {
//   // id req variable
//   let studentId = req.params.id;
//   // sql syntax with id
//   let sql = `
//       DELETE FROM students WHERE id = ${studentId}
//       `;
//   try {
//     //start await delete
//     await db(sql);
//     // start await to recieve data
//     let result = await db("SELECT * FROM students;");
//     res.status(201).send(result.data);
//   } catch {
//     err => res.status(500).send(err);
//   }
// });

// module.exports = router;

export default userRouter