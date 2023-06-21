"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function CategoryScroller({ children }) {
  const scrollRef = useRef(null);

  const leftScroll = () => {
    const scrollPosition = scrollRef.current.scrollX - 10;

    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const rightScroll = () => {
    const scrollPosition = scrollRef.current.scrollX - 10;

    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ChevronLeftIcon
        className="h-12 w-12 text-blue-700 absolute z-50 left-1 top-28 cursor-pointer hover:text-black"
        onClick={leftScroll}
      />
      <ChevronRightIcon
        className="h-12 w-12 text-blue-700 absolute z-50 right-1 top-28 cursor-pointer hover:text-black"
        onClick={rightScroll}
      />

      <div className="flex flex-row gap-8 overflow-hidden p-2" ref={scrollRef}>
        {children}
      </div>
    </>
  );
}
