const express = require("express");
const router = express.Router();
const axios = require("axios");

const map = new Map();
map.set(4, "action"); //Action
map.set(3, "adventure"); //Adv
map.set(51, "indie"); //indie
map.set(5, "rpg"); //Rpg
map.set(10, "strategy"); //Strategy
map.set(2, "shooter"); //FPS
map.set(14, "simulation"); //Simulation
map.set(7, "puzzle"); //Puzzle
map.set(11, "arcade"); //Arcade
map.set(83, "platformer"); //Platformer
map.set(59, "multiplayer"); //multiplayer
map.set(1, "racing"); //racing
map.set(15, "sports"); //sports
map.set(6, "fighting"); //fighting
map.set(28, "board"); //board games

const dates = (last) => {
  const today = new Date();
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - last,
    today.getDate()
  );
  const formattedToday = today.toISOString().split("T")[0];
  const formattedLastMonth = lastMonth.toISOString().split("T")[0];

  return formattedLastMonth + "," + formattedToday;
};

//returns trending list of games
router.get("/trending", (req, res) => {
  const d = dates(3);

  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: req.body.genres,
      search: req.body.search,
      dates: d,
      ordering: "-metacritic",
      page_size: 10,
    },
  };

  axios
    .request(opt)
    .then((response) => {
      const result = response.data.results;

      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

//returns top rated list of games
router.get("/top_rated", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: req.body.genres,
      search: req.body.search,
      ordering: "-metacritic",
      page_size: 10,
    },
  };

  axios
    .request(opt)
    .then((response) => {
      const result = response.data.results;

      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

//returns new list of games
router.get("/new", (req, res) => {
  const d = dates(1);

  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: req.body.genres,
      search: req.body.search,
      dates: d,
      ordering: "-rating",
      page_size: 10,
    },
  };

  axios
    .request(opt)
    .then((response) => {
      const result = response.data.results;

      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

//returns top rated list of games
router.get("/indie", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: "indie",
      search: req.body.search,
      ordering: "-metacritic",
      page_size: 10,
    },
  };

  axios
    .request(opt)
    .then((response) => {
      const result = response.data.results;

      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

// categorized games
router.get("/genre", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: process.env.RAWG_API_KEY,
      genres: req.body.genres,
      search: req.body.search,
      page_size: 20,
    },
  };

  axios
    .request(opt)
    .then((response) => {
      const result = response.data.results;

      const genres = {
        action: [],
        adventure: [],
        indie: [],
        rpg: [],
        strategy: [],
        shooter: [],
        simulation: [],
        puzzle: [],
        arcade: [],
        platformer: [],
        multiplayer: [],
        racing: [],
        sports: [],
        fighting: [],
        board: [],
      };

      let count = 0;

      for (game of result) {
        console.log(game);
        for (g of game.genres) {
          const genre = map.get(g.id);
          if (genres[genre].length < 10) {
            genres[genre].push(game);
            count++;
          }
        }

        if (count >= 150) break;
      }

      res.status(200).send(genres);
    })
    .catch((err) => console.error(err));
});

//returns details of a game
router.get("/game/:gameId", (req, res) => {
  const opt = {
    method: "GET",
    url: "https://api.rawg.io/api/games/" + req.params.gameId,
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
    url: "https://api.rawg.io/api/games/" + req.params.gameId + "/screenshots",
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
    url: "https://api.rawg.io/api/games/" + req.params.gameId + "/movies",
    params: {
      key: process.env.RAWG_API_KEY,
    },
  };

  axios
    .request(opt)
    .then((response) => res.send(response.data.results))
    .catch((err) => console.error(err));
});

router.get("/genreInfo/:id?", (req, res) => {
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
