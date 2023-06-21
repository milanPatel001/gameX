"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Searchbar() {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const handleSearchChange = async (e) => {
    let value = e.currentTarget.value;
    setValue(value);

    //const { data } = await autoComplete(e.currentTarget.value);

    // const res = data.filter((word) => word.startsWith(value));
    // if (value === 0) setResults([]);
    //else setResults(data.Result);
  };

  return (
    <div className="relative">
      <div className="bg-white border border-gray-200 rounded-t-2xl rounded-b-2xl w-96 h-11 flex flex-row drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)] overflow-hidden select-none">
        <MagnifyingGlassIcon className="h-5 pl-1 text-gray-500 self-center w-1/12" />
        <input
          className="pl-1 border-black w-11/12 outline-none self-center"
          placeholder="Search for games...."
          onChange={handleSearchChange}
          //onBlur={() => setResults([])}
        />
      </div>

      {value.length !== 0 && (
        <div className="absolute w-full rounded-t-lg rounded-b-xl py-1 z-50 border border-gray-200 shadow-xl bg-white divide-y">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
        </div>
      )}
    </div>
  );
}
