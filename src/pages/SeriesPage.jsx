import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSeries } from "../actions/serieActions";
import Header from "../components/Header";
import FilmCard from "../components/FilmCard";

const Home = ({ series, fetchSeries }) => {
  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);

  return (
    <div>
      <Header />
      <div class="container mx-auto mt-8 p-4 px-22">
        <h2 class="text-white pl-8 text-2xl pb-4">Explore TV Shows</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {series.map((serie) => (
            <FilmCard key={serie.id} movie={serie} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  series: state.series.series,
});

export default connect(mapStateToProps, { fetchSeries })(Home);
