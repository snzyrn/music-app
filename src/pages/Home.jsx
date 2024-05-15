import { useState, useEffect } from "react";

import FilmCard from "../components/FilmCard";
import Header from "../components/Header";
import { useGetMoviesMutation } from "../redux/services/movieApi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [getMovies, { data }] = useGetMoviesMutation();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getMovies({ query });
      setQuery(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <FilmCard key={data.id} movie={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
