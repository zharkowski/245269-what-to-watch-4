import React from "react";
import PropsTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {FILM_CARD_VIDEO_DELAY} from "../../constants";
import withVideoPlayer from "../../hoc/with-video-player/with-video-player";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this._timer = null;

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleFilmClick = this._handleFilmClick.bind(this);
  }

  _handleMouseEnter() {
    const {onHover, film} = this.props;
    this._timer = setTimeout(onHover, FILM_CARD_VIDEO_DELAY, film);
  }

  _handleMouseLeave() {
    const {onFilmCardLeave} = this.props;
    clearTimeout(this._timer);
    onFilmCardLeave();
  }

  _handleFilmClick(evt) {
    const {film, onFilmClick} = this.props;
    evt.preventDefault();
    onFilmClick(film);
  }

  render() {
    const {film, isPlaying} = this.props;
    const {title, picture, src} = film;
    const VideoWithPlayer = withVideoPlayer(VideoPlayer);

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <div
          className="small-movie-card__image"
          onClick={this._handleFilmClick}
        >
          <VideoWithPlayer
            isPlaying={isPlaying}
            src={src}
            poster={picture}
          />
        </div>
        <h3
          className="small-movie-card__title"
          onClick={this._handleFilmClick}
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    this._handleMouseLeave();
  }
}

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
