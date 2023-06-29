import React, { useState } from "react";
const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState("pizza");
  return (
    <div className="relative">
      <div className="container m-auto px-6 pt-4 md:px-12 lg:px-7">
        <div className="flex items-center flex-wrap px-2 md:px-0">
          <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
            <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
              Your favorite recipes, right at your screen
            </h1>
            <form action="#" className="w-full mt-12" id="recipe-form">
              <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                <p className="hidden p-3 rounded-full bg-transparent md:block md:p-4">
                  Recipe
                </p>
                <input
                  placeholder="Your favorite Recipe"
                  className="w-full p-4 rounded-full"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  onClick={() => handleSearch(query)}
                  type="submit"
                  title="Start buying"
                  className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                >
                  <span className="hidden text-yellow-900 font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-search w-5 mx-auto text-yellow-900 md:hidden"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
            <p className="mt-8 text-gray-700 lg:w-10/12">
              Search for delicious recipes with ease. Type in ingredients,
              cuisine or dish and discover your next meal.
            </p>
          </div>
          <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
            <img
              src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
              className="relative"
              alt="food illustration"
              loading="lazy"
              width="4500"
              height="4500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
