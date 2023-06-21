import Suggested from "@/components/Suggested";
import GameCard from "../components/GameCard";
import { getGames } from "../utils/gameService";
import CategoryScroller from "@/components/CategoryScroller";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  //const res = await getGames();

  //const gameAry = await res.json();
  const gameAry = [
    {
      name: "Grand Theft Auto 5",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      id: 3,
    },
    {
      name: "The Witcher 3",
      background_image:
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      id: 4,
    },
    {
      name: "Portal 2",
      background_image:
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
      id: 55,
    },
    {
      name: "Tomb Raider: Shadows of the Tomb",
      background_image:
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      id: 121,
    },
    {
      name: "Skyrim V",
      background_image:
        "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      id: 1,
    },
  ];

  return (
    <div className="bg-gray-100">
      <main className="min-h-screen flex flex-col gap-8 bg-gray-100 p-8">
        {/* Search Bar */}
        <div className=" self-center">
          <Searchbar />
        </div>

        {/* Recommendation Section*/}
        <div className="ml-1">
          <Suggested />
        </div>

        {/* Game Categories Tabs */}

        {/* Game Categories */}
        <div className="mx-24">
          <div className="border-black relative py-2">
            <h1 className="text-3xl text-black ml-2">Action</h1>

            {/* Action Carousel*/}
            <CategoryScroller>
              {gameAry.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </CategoryScroller>
          </div>

          <div className="border-black mt-4 py-2 relative">
            <h1 className="text-3xl text-black ml-2">Adventure</h1>

            {/* Adventure Carousel */}
            <CategoryScroller>
              {gameAry.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </CategoryScroller>
          </div>

          <div className="border-black mt-4 py-2 relative">
            <h1 className="text-3xl text-black ml-2">Adventure</h1>

            {/* Horror Carousel */}
            <CategoryScroller>
              {gameAry.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </CategoryScroller>
          </div>

          <div className="border-black mt-4 py-2 relative">
            <h1 className="text-3xl text-black ml-2">Adventure</h1>

            {/*Platformer Carousel */}
            <CategoryScroller>
              {gameAry.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </CategoryScroller>
          </div>
        </div>
      </main>
    </div>
  );
}
