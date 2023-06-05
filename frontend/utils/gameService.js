export async function getGames() {
  const data = await fetch("http://localhost:3000/api/games");
  return data;
}

export async function getGameInfo(gameId) {
  const data = await fetch("http://localhost:3000/api/games/game/" + gameId);
  return data;
}
