import { FaRegHeart } from "react-icons/fa";

const FilmCard = ({ movie }) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="bg-white rounded-lg shadow-inner">
      <img
        src={poster_path ? `${posterBaseUrl}${poster_path}` : "No Image"}
        alt={title}
        className="w-full rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-500">{movie.release_date}</p>
      </div>
      <FaRegHeart className="absolute top-2 right-2 text-red-500" />
    </div>
  );
};

export default FilmCard;
