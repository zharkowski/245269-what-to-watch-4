import React from "react";
import PropTypes from "prop-types";
import {filmDetails} from "../mocks/films";

const withActiveFilm = (Component) => {
  class WithActiveFilm extends React.PureComponent {
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
      const {currentFilm} = this.state;
      return (
        <Component
          {...this.props}
          title={title}
          genre={genre}
          releaseYear={releaseYear}
          films={films}
          currentFilm={currentFilm}
          onFilmClick={this.handleFilmClick}
        />
      );
    }
  }

  WithActiveFilm.propTypes = {
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

  return WithActiveFilm;
};

export default withActiveFilm;
