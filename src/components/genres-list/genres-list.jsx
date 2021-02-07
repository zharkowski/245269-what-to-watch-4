import React from "react";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ALL_GENRES} from "../../constants";

const GenresList = (props) => {
  const {genres, activeItem, itemSetActiveHandler} = props;
  const getGenreHandler = (genre) => (evt) => {
    evt.preventDefault();
    itemSetActiveHandler(genre);
  };
  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeItem === ALL_GENRES ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={getGenreHandler(ALL_GENRES)}>All genres</a>
      </li>
      {genres.map((genre, i) => (
        <li key={i} className={`catalog__genres-item ${activeItem === genre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={getGenreHandler(genre)}>{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeItem: PropTypes.string.isRequired,
  itemSetActiveHandler: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  activeItem: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  itemSetActiveHandler(genre) {
    dispatch(ActionCreator.changeGenreFilter(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.setDefaultShowingFilmsCount());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
