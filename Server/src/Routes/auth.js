import { Router } from "express";
var router = Router();
import { hash, compare } from "bcrypt"; // this is for hashes..bcrypt is a password-hashing function
import { sign } from "jsonwebtoken"; //json web token :  https://jwt.io/
import { BCRYPT_WORK_FACTOR, SECRET_KEY } from "../config";
import db from "../model/helper";

router.post("/register", async (req, res) => {
  let { username, password, email } = req.body;
  let hashedPassword = await hash(password, BCRYPT_WORK_FACTOR);

  try {
    let sql = `select * from users where username = "${username}"`;
    let results = await db(sql);

    if (false && results.data.length === 1) {
      //here it will just see false and not event look at what is after &&, it will jump to line 43 onwards.
      //and when it reaches line 49 it will see a uniqueness violation

      res.status(400).send({ message: `username already exists` });
    } else {
      let sql = `
            INSERT INTO users (username, password, email)
            VALUES ('${username}', '${hashedPassword}', '${email}')
        `;
      await db(sql); //here will be the uniqueness violation cause this is where the insert is happening

      let results = await db(
        `select * from users where username = "${username}"`
      );
      let user = results.data[0];
      let payload = { userId: user.userId };
      let token = sign(payload, SECRET_KEY);
      delete user.password;
      res.send({ message: "Registration succeeded", token: token, user: user });
    }
  } catch (err) {
    //if this is the error code, then return username exists or else return the error on line 59
    if (err.code === "ER_DUP_ENTRY") {
      res.status(400).send({ err: err.code });
    } else {
      res.status(500).send({ err: err.message });
    }

    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    let sql = `SELECT * FROM users WHERE username = '${username}'`;

    let results = await db(sql);

    if (results.data.length === 0) {
      res.status(401).send({ Error: `Login Failed` });
    } else {
      let user = results.data[0];

      let passwordsEqual = await compare(password, user.password);

      if (passwordsEqual) {
        let payload = { userId: user.userId };

        let token = sign(payload, SECRET_KEY);
        delete user.password;
        res.send({
          message: "Login succeeded",
          token: token,
          user: user,
        });
      } else {
        res.status(401).send({ Error: `Login Failed` });
      }
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

export default router;
