const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const expressSession = require("express-session");
require("dotenv").config();

const users = require("./routes/users");
const games = require("./routes/games");
const auth = require("./routes/auth");
const pool = require("./db/index");
const passportSetup = require("./config/passport_config");
const pgSession = require("connect-pg-simple")(expressSession);

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

/*app.use(
  expressSession({
    store: new pgSession({
      pool: pool,
    }),
    resave: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
  })
);
*/

//initializing passport
//app.use(passport.initialize());
//app.use(passport.session());

app.use(express.json());
app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/auth", auth);

app.listen(process.env.PORT || 3000, () => console.log("Connected"));
