import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";

const Home = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 p-4 px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <FilmCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies })(Home);
