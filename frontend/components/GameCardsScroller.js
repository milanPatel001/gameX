"use client";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import GameCard from "./GameCard";

export default function GameCardsScroller() {
  return (
    <div>
      <ArrowLeftCircleIcon
        onClick={() => console.log("Left")}
        className="h-12 w-12 text-black z-50 absolute bottom-16 left-4 cursor-pointer"
      />
      <div className="flex flex-row gap-3 py-2 overflow-x-auto items-center"></div>
      <ArrowRightCircleIcon
        onClick={() => console.log("Right")}
        className="h-12 w-12 text-black z-50 absolute bottom-16 right-8 cursor-pointer"
      />
    </div>
  );
}
