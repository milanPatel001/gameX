const express = require("express");
const router = express.Router();
const axios = require("axios");

//returns list of games
router.get("/", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: req.body.genres,
      search: req.body.search,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

//returns details of a game
router.get("/game/:gameId", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/" + req.params.gameId,
    params: {
      key: process.env.RAWG_API_KEY,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

//for screenshots of a game
router.get("/screenshots/:gameId", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/" + req.params.gameId + "/screenshots",
    params: {
      key: process.env.RAWG_API_KEY,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

//for trailers of a game
router.get("/trailers/:gameId", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/" + req.params.gameId + "/screenshots",
    params: {
      key: process.env.RAWG_API_KEY,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

router.get("/genres/:id?", (req, res) => {
  const extension = req.params.id ? "/" + req.params.id : "";

  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/genres" + extension,
    params: {
      key: process.env.RAWG_API_KEY,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
});

module.exports = router;
