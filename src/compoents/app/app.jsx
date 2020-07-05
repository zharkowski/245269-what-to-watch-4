import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";

const App = (props) => {
  const {title, genre, releaseYear, films} = props;
  const onFilmTitleClick = () => {};
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            title={title}
            genre={genre}
            releaseYear={releaseYear}
            films={films}
            onFilmTitleClick={onFilmTitleClick}
          />
        </Route>
        <Route exact path="/dev-film-page">
          <FilmPage/>
        </Route>
      </Switch>
    </BrowserRouter>
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
