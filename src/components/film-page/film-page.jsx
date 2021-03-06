import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import {reviews} from "../../mocks/reviews";
import {FilmsList} from "../films-list/films-list.jsx";
import {MORE_LIKE_THIS_FILMS_COUNT} from "../../constants";
import withActiveFilm from "../../hoc/with-active-film/with-active-film";
import withActiveTab from "../../hoc/with-active-tab/with-active-tab";

const FilmPage = (props) => {
  const {film, relatedFilms, onFilmClick} = props;
  const {title, genre, releaseYear, backgroundImage, picture} = film;
  const FilmsListWithActiveFilm = withActiveFilm(FilmsList);
  const TabsWithActiveTab = withActiveTab(Tabs);
  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={picture}
                alt={title}
                width="218"
                height="327"
              />
            </div>

            <TabsWithActiveTab
              film={film}
              reviews={reviews}
            />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsListWithActiveFilm
            films={relatedFilms.slice(0, MORE_LIKE_THIS_FILMS_COUNT)}
            onFilmClick={onFilmClick}
            showingFilmsCount={MORE_LIKE_THIS_FILMS_COUNT}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    descriptions: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
  relatedFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ).isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default FilmPage;
