"use client";
import { useState } from "react";
import Link from "next/link";

const Card = ({ imgSrc, title, description, recipe }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`rounded-none sm:rounded-lg overflow-hidden mb-10 relative flex flex-col place-content-center items-center justify-center cursor-pointer w-full shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out`}
    >
      <button
        className={`absolute top-0 right-0 z-40 bg-opacity-[0.30] mt-0
        inline-block
        py-2
        px-4
        border border-[#E5E7EB]
        bg-amber-700
        text-base text-body-color
        font-medium
        hover:border-primary hover:bg-amber-700 hover:text-white
        transition hover:border-transparent rounded ${
          isOpen ? "opacity-0 invisible" : "opacity-1 visible"
        }`}
        onClick={() => navigator.clipboard.writeText(recipe)}
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="inline mr-1"
        >
          <g fill="#000000">
            <path
              fillRule="evenodd"
              d="M3.25 2.5H4v.25C4 3.44 4.56 4 5.25 4h5.5C11.44 4 12 3.44 12 2.75V2.5h.75a.75.75 0 01.75.75v3a.75.75 0 001.5 0v-3A2.25 2.25 0 0012.75 1h-.775c-.116-.57-.62-1-1.225-1h-5.5c-.605 0-1.11.43-1.225 1H3.25A2.25 2.25 0 001 3.25v10.5A2.25 2.25 0 003.25 16h9.5A2.25 2.25 0 0015 13.75v-1a.75.75 0 00-1.5 0v1a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75V3.25a.75.75 0 01.75-.75zm2.25-1v1h5v-1h-5z"
              clipRule="evenodd"
            />
            <path d="M4.75 5.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM4 12.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM4.75 8.5a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2zM16 9.25a.75.75 0 01-.75.75h-4.19l1.22 1.22a.75.75 0 11-1.06 1.06l-2.5-2.5a.752.752 0 010-1.06l2.5-2.5a.75.75 0 111.06 1.06L11.06 8.5h4.19a.75.75 0 01.75.75z" />
          </g>
        </svg>
        Copy Ingredients
      </button>
      <div className="relative w-full" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={imgSrc}
          alt="Card Image"
          className={`z-0 relative top-0 mt-0 w-full h-full rounded-none sm:rounded-lg transition-opacity ease-in-out overflow-y-scroll ${
            isOpen ? "opacity-1" : "opacity-[0.1]"
          }`}
        />

        <p
          className={`z-0 leading-relaxed absolute pl-4 top-0 mt-1 left-0 whitespace-pre-line h-full overflow-y-scroll scrollbar-hide transition-opacity ease-in-out ${
            isOpen ? "opacity-0" : "opacity-1"
          }`}
        >
          {recipe.split(",").join("\r")}
          {"\n\n"}
          {description}
        </p>
      </div>
      <Link
        href="/"
        className="  mt-2
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-amber-700 hover:text-white
                     transition
                     "
      >
        View Details
      </Link>

      <h2 className="text-2xl font-medium z-10 p-7 sm:p-7 md:p-5 xl:p-7">
        {title}
      </h2>
    </div>
  );
};

export default Card;