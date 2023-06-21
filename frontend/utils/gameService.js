export async function getGames() {
  const data = await fetch("http://localhost:3000/api/games");
  return data;
}

export async function getIndieGames() {
  const data = await fetch("http://localhost:3000/api/games/indie");
  return data;
}

export async function getTrendingGames() {
  const data = await fetch("http://localhost:3000/api/games/trending");
  return data;
}

export async function getNewReleasedGames() {
  const data = await fetch("http://localhost:3000/api/games/new");
  return data;
}

export async function getTopRatedGames() {
  const data = await fetch("http://localhost:3000/api/games/top_rated");
  return data;
}

export async function getGameInfo(gameId) {
  const data = await fetch("http://localhost:3000/api/games/game/" + gameId);
  return data;
}

export async function getGameScreenshots(gameId) {
  const data = await fetch(
    "http://localhost:3000/api/games/screenshots/" + gameId
  );
  return data;
}

export async function getGameTrailers() {}
