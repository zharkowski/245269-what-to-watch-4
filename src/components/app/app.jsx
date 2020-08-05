import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import {filmDetails} from "../../mocks/films";

class App extends React.PureComponent {
  render() {
    const {title, genre, releaseYear, films, currentFilm, onFilmClick} = this.props;
    const relatedFilms = currentFilm !== null
      ? films.filter((film) => film.genre === genre)
      : films;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentFilm ?
              <FilmPage
                film={currentFilm}
                onFilmClick={onFilmClick}
                relatedFilms={relatedFilms}
              /> :
              <Main
                title={title}
                genre={genre}
                releaseYear={releaseYear}
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
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  currentFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  onFilmClick: PropTypes.func.isRequired,
};

export default App;
