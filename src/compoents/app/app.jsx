import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {title, genre, releaseYear, filmTitles} = props;
  return (
    <Main
      title={title}
      genre={genre}
      releaseYear={releaseYear}
      filmTitles={filmTitles}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  filmTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
