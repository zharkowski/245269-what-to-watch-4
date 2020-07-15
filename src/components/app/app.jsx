import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import FilmPage from "../film-page/film-page.jsx";
import {filmDetails} from "../../mocks/films";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: null,
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
  }

  handleFilmClick() {
    this.setState({currentFilm: filmDetails});
  }

  render() {
    const {title, genre, releaseYear, films} = this.props;
    const currentFilm = this.state.currentFilm;
    const relatedFilms = films.filter((film) => this.state.currentFilm !== null
      ? film.genre === this.state.currentFilm.genre
      : true);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentFilm ?
              <FilmPage
                film={currentFilm}
                onFilmClick={this.handleFilmClick}
                relatedFilms={relatedFilms}
              /> :
              <Main
                title={title}
                genre={genre}
                releaseYear={releaseYear}
                films={films}
                onFilmClick={this.handleFilmClick}
              />
            }
          </Route>
          <Route exact path="/dev-film-page">
            <FilmPage
              film={filmDetails}
              onFilmClick={this.handleFilmClick}
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
};

export default App;
