import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {connect} from "react-redux";

class FilmsList extends React.PureComponent {
  render() {
    const {films, showingFilmsCount, onFilmClick, changeActiveFilm, activeFilm} = this.props;
    const onFilmCardHover = (film) => {
      changeActiveFilm(film);
    };
    const onFilmCardLeave = () => {
      changeActiveFilm(null);
    };
    const filmClickHandler = (film) => {
      onFilmClick(film);
    };
    return (
      <div className="catalog__movies-list">
        {films.slice(0, showingFilmsCount).map((film, index) => {
          const isActive = activeFilm === film;
          return (
            <FilmCard
              key={`${index}-${film.title}`}
              film={film}
              onHover={onFilmCardHover}
              onFilmCardLeave={onFilmCardLeave}
              onFilmClick={filmClickHandler}
              isPlaying={isActive}
            />);
        })
        }
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  showingFilmsCount: PropTypes.number.isRequired,
  changeActiveFilm: PropTypes.func.isRequired,
  activeFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  films: state.films,
  showingFilmsCount: state.showingFilmsCount
});

export {FilmsList};

export default connect(mapStateToProps)(FilmsList);
