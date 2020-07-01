import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {title, genre, releaseYear, films} = props;
  const onFilmTitleClick = () => {};
  return (
    <Main
      title={title}
      genre={genre}
      releaseYear={releaseYear}
      films={films}
      onFilmTitleClick={onFilmTitleClick}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default App;
