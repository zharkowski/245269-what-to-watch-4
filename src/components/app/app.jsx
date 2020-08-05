import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import {filmDetails} from "../../mocks/films";

class App extends React.PureComponent {
  render() {
    const {promoFilm, films, activeFilm, changeActiveFilm} = this.props;
    const relatedFilms = activeFilm
      ? films.filter((film) => film.genre === activeFilm.genre)
      : films;

    const onFilmClick = () => {
      changeActiveFilm(filmDetails);
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {activeFilm ?
              <FilmPage
                film={activeFilm}
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
  }
}

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
  activeFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
  changeActiveFilm: PropTypes.func.isRequired,
};

export default App;
