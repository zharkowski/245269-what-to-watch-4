import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };

    // this.handleFilmCardHover = this.handleFilmCardHover.bind(this);
  }

  handleFilmCardHover(film) {
    this.setState({activeFilm: film});
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
};

export default FilmsList;
