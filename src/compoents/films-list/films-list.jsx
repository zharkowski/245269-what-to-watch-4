import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };

    this.handleFilmCardHover = this.handleFilmCardHover.bind(this);
    this.handleFilmClick = this.handleFilmClick.bind(this);
  }

  handleFilmCardHover(film) {
    this.setState({activeFilm: film});
  }

  handleFilmClick(film) {
    this.props.onFilmClick(film);
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          return (
            <FilmCard
              key={`${index}-${film.title}`}
              film={film}
              onHover={this.handleFilmCardHover}
              onFilmClick={this.handleFilmClick}
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
};

export default FilmsList;
