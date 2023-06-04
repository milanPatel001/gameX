const express = require("express");
const app = express();
require("dotenv").config();

const users = require("./routes/users");
const games = require("./routes/games");
const client = require("./db/index");

app.use(express.json());
app.use("/api/users", users);
app.use("/api/games", games);

async function getPgDate() {
  await client.connect();

  const res = await client.query("SELECT NOW()");
  console.log(res?.rows[0].now);

  client
    .end()
    .then(() => console.log("DB connection ended"))
    .catch((err) => console.error(err));
}

app.listen(process.env.PORT || 3000, () => console.log("Connected"));
//getPgDate();
