import React from "react";
import PropsTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {FILM_CARD_VIDEO_DELAY} from "../../constants";

const FilmCard = (props) => {
  let timer = null;

  const handleMouseEnter = () => {
    const {onHover, film} = props;
    timer = setTimeout(onHover, FILM_CARD_VIDEO_DELAY, film);
  };

  const handleMouseLeave = () => {
    const {onFilmCardLeave} = props;
    clearTimeout(timer);
    onFilmCardLeave();
  };

  const {film, onFilmClick, isPlaying} = props;
  const {title, picture, src} = film;
  const handleFilmClick = (evt) => {
    evt.preventDefault();
    onFilmClick(film);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="small-movie-card__image"
        onClick={handleFilmClick}
      >
        <VideoPlayer
          isPlaying={isPlaying}
          src={src}
          poster={picture}
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
    src: PropsTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropsTypes.bool.isRequired,
  onHover: PropsTypes.func.isRequired,
  onFilmClick: PropsTypes.func.isRequired,
  onFilmCardLeave: PropsTypes.func.isRequired,
};

export default FilmCard;
