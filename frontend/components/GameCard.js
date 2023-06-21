"use client";

import Image from "next/image";
import { PlusCircleIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { getGameInfo } from "@/utils/gameService";
import { useRouter } from "next/navigation";

export default function GameCard({ game }) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col rounded-3xl h-48 border flex-shrink-0 overflow-hidden 
    bg-gray-800 items-center hover:scale-105 transition duration-300 
    ease-in-out select-none cursor-pointer z-40 
    drop-shadow-[16px_16px_0_rgba(0,0,0,0.25)]"
      onClick={() => router.push("/game/" + game.id)}
    >
      <div className="relative h-3/4 overflow-hidden">
        <Image
          className="object-contain"
          src={game.background_image}
          height={100}
          width={280}
        />
      </div>

      <p className="text-white font-semibold mt-2 select-none truncate pb-2 px-2">
        {game.name}
      </p>
      <div className="flex flex-row gap-2 w-full mb-2 py-1 px-6 border-red-100 justify-end">
        <PlusCircleIcon className="h-6 w-6 text-white hover:text-green-400" />
        <BookmarkIcon className="h-6 w-6 text-white hover:text-blue-400" />
      </div>
    </div>
  );
}
