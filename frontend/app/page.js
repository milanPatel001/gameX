import GameCard from "../../components/GameCard";
import GameCardsScroller from "../../components/GameCardsScroller";
import Navbar from "../../components/Navbar";
import { getGames } from "../../utils/gameService";

export default async function Home() {
  const res = await getGames();

  const gameAry = await res.json();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-gradient-to-b from-white from-20% via-gray-200 via-40% to-gray-700">
        <div className="border border-black my-2 px-2 relative">
          <h1 className="font-x text-2xl">Action</h1>
          <GameCardsScroller />
        </div>

        <div className="border border-black my-2 px-2">
          <h1 className="font-x text-2xl">Adventure</h1>
          <div className="flex flex-row gap-3 py-2 overflow-x-auto">
            {gameAry.slice(0, 4).map((game) => {
              <GameCard key={game.name} game={game} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
