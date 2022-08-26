import React, { useState } from "react";
import TurkeyCityList from "../TurkeyCityList";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  const [city, setCity] = useState("");

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-900 w-full h-full flex flex-col items-center">
      <div className="container flex flex-col items-center">
        <form onSubmit={search} className="w-2/3 mt-36">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            </div>
            <input
              type="search"
              id="default-search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search City.."
              required
            />
            <NavLink
              to={`/${city}`}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </NavLink>
          </div>
        </form>
        <div className="grid grid-cols-3 gap-5 mg place-content-center w-full mt-32 mg">
          {TurkeyCityList.map((city) => {
            return (
              <NavLink to={`/${city.name.toLowerCase()}`}>
                <div
                  key={city.name}
                  className="focus:outline-none  cursor-pointer text-center p-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                {city.name}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
