import React, { Component } from "react";
import { movies } from "../actions";
import { connect } from "react-redux";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  search() {
    console.log("Movie: ", this.state.query);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_REACT_APP_API_KEY
    }&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonObj) => {
        this.props.movies(jsonObj.results);
      });
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <label>Search: </label>{" "}
            <form
              type="text"
              placeholder="Search any movie"
              onChange={(event) => this.setState({ query: event.target.value })}
            ></form>{" "}
            <button bsStyle="success" onClick={() => this.search()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { movies })(Search);
