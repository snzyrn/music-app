import FilmCard from "../components/FilmCard";
import { genres } from "../assets/constants";
import { UseGetTopChartsQuery } from "../redux/services/TMDB";

const Discover = () => {
  const { data, isFetching, error } = UseGetTopChartsQuery();
  console.log(data);
  return (
    <div>
      <div class="flex flex-col">
        <div class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <h2 class="font-bold text-3xl text-left">Discover</h2>
          <select
            onChange={() => {}}
            value=""
            class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>
        <div class="flex flex-wrap sm:justify-start justify-center gap-8">
          <FilmCard />
        </div>
      </div>
    </div>
  );
};

export default Discover;
