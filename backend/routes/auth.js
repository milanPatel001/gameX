const express = require("express");
const router = express.Router();
const axios = require("axios");
const passport = require("passport");
const pool = require("../db/index");

const options = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "1800",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
};

router.post("/signup", (req, res) => {
  //hash + salt the password

  const insertUser = {
    query: "INSERT INTO USERS(fname,lname,email) VALUES($1,$2,$3) RETURNING id",
    values: [req.body.fname, req.body.lname, req.body.email],
  };

  pool.query(insertUser).then((res) => {
    const id = res.rows[0].id;

    const insertPasswordQuery = {
      query:
        "INSERT INTO user_password(salt,hashed_password) VALUES($1,$2) WHERE user_id = $3",
      values: [salt, hashed_password, id],
    };

    pool.query(insertPassword);
  });
});

router.get("/login", (req, res) => {
  const query = {
    query:
      "SELECT u.id, u.fname, u.lname FROM USERS u, USER_PASSWORD up WHERE u.id = up.user_id AND u.email = $1",
    values: [req.body.email],
  };

  pool.query(query).then((res) => {
    if (res.rows.length != 0) {
      const email = res.rows[0].email;
      const hashed_password = res.rows[0].hashed_password;

      // match email

      // match entered password with hashed_password

      //create jwt

      //store in a cookie
    } else {
      console.log("User not found!!");
    }
  });
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return err;
    }
    res.redirect("/api/auth/google");
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send(req.user);
});

module.exports = router;
