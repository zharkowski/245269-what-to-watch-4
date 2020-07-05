import React from "react";
import PropsTypes from "prop-types";

const FilmCard = (props) => {
  const {film, onHover, onFilmClick} = props;
  const {title, picture} = film;
  const handleFilmClick = (evt) => {
    evt.preventDefault();
    onFilmClick(film);
  };
  const handleMouseOver = () => {
    onHover(film);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseOver}
    >
      <div
        className="small-movie-card__image"
        onClick={handleFilmClick}
      >
        <img
          src={picture}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3
        className="small-movie-card__title"
        onClick={handleFilmClick}
      >
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    picture: PropsTypes.string.isRequired,
  }).isRequired,
  onHover: PropsTypes.func.isRequired,
  onFilmClick: PropsTypes.func.isRequired,
};

export default FilmCard;
