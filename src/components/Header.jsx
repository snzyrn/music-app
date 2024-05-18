import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import KinoVerseImage from "../assets/KinoVerse.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="bg-transparent">
      <div className="mx-12 p-4 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <Link to="/">
            <button>
              <img src={KinoVerseImage} alt="KinoVerse" className="w-40" />
            </button>
          </Link>
        </div>
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex mt-5 md:mt-2"
        >
          <Link>
            <button
              type="submit"
              className="absolute inset-y-0 left-0 px-4 py-2 text-white bg-transparent focus:outline-none font-medium text-sm"
            >
              <FaSearch />
            </button>
          </Link>
          <input
            type="search"
            id="default-search"
            className="w-80 h-10 p-4 pl-12 text-sm bg-black rounded-xl text-white placeholder-[#B3B3B3]"
            placeholder="Search a Movie"
            value={searchQuery}
            onChange={handleSearchInput}
          />
        </form>
        <div className="flex items-center m-0 space-x-1 gap-20 mt-5 md:mt-0">
          <Link to="/" className="text-white hover:text-[#B3B3B3]">
            Home
          </Link>
          <Link to="/movies" className="text-white hover:text-[#B3B3B3]">
            Movies
          </Link>
          <Link to="/series" className="text-white hover:text-[#B3B3B3]">
            TV Shows
          </Link>
          <Link to="/favorites" className="text-white hover:text-[#B3B3B3]">
            <button>
              <FaHeart />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
