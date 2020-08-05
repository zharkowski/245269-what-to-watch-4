import React from "react";
import PropTypes from "prop-types";

const withActiveFilm = (Component) => {
  class WithActiveFilm extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeFilm: null,
      };

      this.changeActiveFilm = this.changeActiveFilm.bind(this);
    }

    changeActiveFilm(film) {
      this.setState({activeFilm: film});
    }

    render() {
      const {activeFilm} = this.state;
      return (
        <Component
          {...this.props}
          activeFilm={activeFilm}
          changeActiveFilm={this.changeActiveFilm}
        />
      );
    }
  }

  WithActiveFilm.propTypes = {
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
