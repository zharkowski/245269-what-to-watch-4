import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import {filmDetails} from "../../mocks/films";

const App = React.memo((props) => {
  const {promoFilm, films, activeItem, itemSetActiveHandler} = props;
  const relatedFilms = activeItem
    ? films.filter((film) => film.genre === activeItem.genre)
    : films;

  const onFilmClick = () => {
    itemSetActiveHandler(filmDetails);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {activeItem ?
            <FilmPage
              film={activeItem}
              onFilmClick={onFilmClick}
              relatedFilms={relatedFilms}
            /> :
            <Main
              promoFilm={promoFilm}
              films={films}
              onFilmClick={onFilmClick}
            />
          }
        </Route>
        <Route exact path="/dev-film-page">
          <FilmPage
            film={filmDetails}
            onFilmClick={onFilmClick}
            relatedFilms={relatedFilms}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

App.displayName = `App`;

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  activeItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
  itemSetActiveHandler: PropTypes.func.isRequired,
};

export default App;
