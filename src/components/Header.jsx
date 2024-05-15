import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetMoviesMutation } from "../redux/services/movieApi";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import KinoVerseImage from "../assets/KinoVerse.png";

const Header = () => {
  const [query, setQuery] = useState("");
  const [getMovies] = useGetMoviesMutation();

  const handleSearch = (e) => {
    e.preventDefault();
    getMovies({ query });
  };

  return (
    <div className="bg-transparent">
      <div className=" mx-12 p-4 flex items-center justify-between">
        <div>
          <img src={KinoVerseImage} alt="KinoVerse" class="w-40" />
        </div>
        <form className="relative flex mt-2" onSubmit={handleSearch}>
          <button
            type="submit"
            className="absolute inset-y-0 left-0 px-4 py-2 text-white bg-transparent focus:outline-none font-medium text-sm"
          >
            <FaSearch />
          </button>
          <input
            type="search"
            id="default-search"
            className="w-80 h-10 p-4 pl-12 text-sm bg-[#181818] rounded-xl text-white placeholder-[#B3B3B3]"
            placeholder="Search a Movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <div className="flex items-center m-0 space-x-1 gap-20">
          <Link to="/" className="text-white hover:text-[#B3B3B3]">
            Home
          </Link>
          <Link to="/movies" className="text-white hover:text-[#B3B3B3]">
            Movies
          </Link>
          <Link to="/series" className="text-white hover:text-[#B3B3B3]">
            Series
          </Link>
        </div>
        <div>
          <button class="text-white text-lg hover:text-[#B3B3B3]">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
