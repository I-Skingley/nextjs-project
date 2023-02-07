"use client";
import { useState } from "react";
import Link from "next/link";


const Searchbar = () => {
    const [selection, setItems] = useState("All food types");

  return (
    <form className="z-40 py-4 opacity-95 grid grid-cols-3 grid-rows-1 items-center align-center w-full mb-10 sm:relative fixed bg-white border-solid border-black">
      <div className="mr-0 justify-end justify-items-end ml-auto">
        <div className="group inline-block relative justify-end">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded inline-flex items-center col-span-1">
            <span className="mr-1">{selection}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-20">
          <li className="">
              <Link
                className="rounded-t bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="/recipes/"
                onClick={() => setItems("All food types")}
              >
                All food types
              </Link>
            </li>
            <li className="">
              <Link
                className="rounded-t bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="/recipes/"
                onClick={() => setItems("Beef")}
              >
                Beef
              </Link>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => setItems("Pork")}
              >
                Pork
              </a>
            </li>
            <li className="">
              <a
                className=" bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => setItems("Poultry")}
              >
                Poultry
              </a>
            </li>
            <li className="">
              <a
                className=" bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => setItems("Seafood")}
              >
                Seafood
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 hover:text-black py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={() => setItems("Vegetarian")}
              >
                Vegetarian
              </a>
            </li>
          </ul>
        </div>
      </div>

      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative col-span-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
      <button
        type="submit"
        className="col-span-1 items-center p-2.5 ml-0 w-[125px] h-auto text-sm font-medium text-white bg-blue-700 rounded-r border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="inline-flex mr-4 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="inline-flex font-semibold">Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
