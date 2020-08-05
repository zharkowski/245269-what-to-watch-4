import React from "react";
import PropTypes from "prop-types";
import {filmDetails} from "../mocks/films";

const withActiveFilm = (Component) => {
  class WithActiveFilm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeFilm: null,
      };

      this.handleFilmClick = this.handleFilmClick.bind(this);
    }

    handleFilmClick() {
      this.setState({activeFilm: filmDetails});
    }

    render() {
      const {promoFilm, films} = this.props;
      const {activeFilm} = this.state;
      return (
        <Component
          {...this.props}
          promoFilm={promoFilm}
          films={films}
          activeFilm={activeFilm}
          onFilmClick={this.handleFilmClick}
        />
      );
    }
  }

  WithActiveFilm.propTypes = {
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
  };

  return WithActiveFilm;
};

export default withActiveFilm;
