import Image from "next/image";

export default function GameCardMini({ game }) {
  return (
    <div
      className="relative h-72 w-72 truncate rounded-2xl shadow-2xl flex-shrink-0 flex-grow-0 
                    hover:scale-105 transition ease-in-out duration-300 cursor-pointer"
    >
      <Image
        alt="ok"
        src={game.background_image}
        height={384}
        width={216}
        sizes="50vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div className="absolute top-0 bg-gradient-to-t from-black via-transparent to-transparent h-full w-full z-20"></div>
      <p className="truncate w-full text-2xl absolute bottom-4 left-3 text-white z-30">
        {game.name}
      </p>
    </div>
  );
}
