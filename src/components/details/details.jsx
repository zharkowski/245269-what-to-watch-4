import React from "react";
import PropTypes from "prop-types";
import {MINUTES_IN_HOUR} from "../../constants";

const Details = (props) => {
  const {director, actors, runtime, genre, releaseYear} = props;
  const createActorsTemplate = (actorNames) => {
    return (
      <React.Fragment>
        {actorNames.map((actor, index) => {
          return (
            <React.Fragment key={index}>
              {actor}
              {index !== actors.length - 1
                ? <React.Fragment>
                  {`, `}
                  <br/>
                </React.Fragment>
                : ``}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };
  const getFormattedRuntime = (filmRuntime) => `${Math.floor(filmRuntime / MINUTES_IN_HOUR)}h ${runtime % MINUTES_IN_HOUR}m`;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {createActorsTemplate(actors)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getFormattedRuntime(runtime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>

  );
};

Details.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  runtime: PropTypes.number.isRequired,
};

export default Details;
