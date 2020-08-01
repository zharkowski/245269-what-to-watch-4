import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";
import {connect} from "react-redux";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };

    this._handleFilmCardHover = this._handleFilmCardHover.bind(this);
    this._handlerFilmCardLeave = this._handlerFilmCardLeave.bind(this);
    this._handleFilmClick = this._handleFilmClick.bind(this);
  }

  _handleFilmCardHover(film) {
    this.setState({activeFilm: film});
  }

  _handlerFilmCardLeave() {
    this.setState({activeFilm: null});
  }

  _handleFilmClick(film) {
    this.props.onFilmClick(film);
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          const isActive = this.state.activeFilm === film;
          return (
            <FilmCard
              key={`${index}-${film.title}`}
              film={film}
              onHover={this._handleFilmCardHover}
              onFilmCardLeave={this._handlerFilmCardLeave}
              onFilmClick={this._handleFilmClick}
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
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {FilmsList};

export default connect(mapStateToProps)(FilmsList);
