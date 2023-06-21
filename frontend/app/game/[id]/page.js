import { getGameInfo, getGameScreenshots } from "@/utils/gameService";

export default function GamePage({ params }) {
  //const gameData = getGameInfo(params.id);
  //const gameScreenshots = getGameScreenshots(params.id);
  const game = {
    id: 2,
    name: "The Legend of Zelda: Tears of the Kingdom",
    description:
      "<p>An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?</p>",
    released: "2023-05-12",
    background_image:
      "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg",
    platforms: [
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5234,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2023-05-12",
        requirements: {},
      },
    ],
    genres: [{ name: "Action" }, { name: "Adventure" }],
    esrb_rating: { name: "Everyone 10+" },
    screenshots: [
      {
        id: 752887,
        image:
          "https://media.rawg.io/media/screenshots/ab7/ab7efedd1d85fb0007f84a2955ac9d39.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
      {
        id: 752888,
        image:
          "https://media.rawg.io/media/screenshots/788/78816464d5fddfa7f81b892b9b7c6a39.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
      {
        id: 752889,
        image:
          "https://media.rawg.io/media/screenshots/6d9/6d9a1de06e87730707e4f39acd6cc237.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
      {
        id: 752890,
        image:
          "https://media.rawg.io/media/screenshots/c11/c11eaf445d1146cad23f499adbd86b85.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
      {
        id: 752891,
        image:
          "https://media.rawg.io/media/screenshots/29f/29fb6ff5828089ce44aa0e82fe75b176.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
      {
        id: 752892,
        image:
          "https://media.rawg.io/media/screenshots/4ca/4ca53cc663eeea9eb0652413ea4e8372.jpg",
        width: 640,
        height: 480,
        is_deleted: false,
      },
    ],
  };

  return (
    <div>
      <div className="">{game.id}</div>
    </div>
  );
}
