import GameCardMini from "./GameCardMini";

export default function Suggested() {
  const gameAry = [
    {
      name: "Grand Theft Auto 5",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    },
    {
      name: "The Witcher 3",
      background_image:
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    },
    {
      name: "Portal 2",
      background_image:
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    },
    {
      name: "Tomb Raider: Shadows of the Tomb",
      background_image:
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    },
    {
      name: "Skyrim V",
      background_image:
        "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    },
    {
      name: "Portal 1",
      background_image:
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    },
  ];

  /*
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((currentIndex + 1) % 6);
      console.log(currentIndex);
    }, 10000);

    // Clean up the timeout when the component unmounts or changes
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  */

  return (
    <>
      <h1 className="text-3xl mb-4 ml-24">Recommendations...</h1>

      {/* Showcase Games */}
      <div className="flex flex-row gap-8 h-72 justify-center">
        <GameCardMini game={gameAry[0]} />
        <GameCardMini game={gameAry[1]} />
        <GameCardMini game={gameAry[2]} />
        <GameCardMini game={gameAry[3]} />
      </div>
    </>
  );
}
