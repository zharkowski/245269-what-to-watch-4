import React from "react";
import PropTypes from "prop-types";
import {getRatingLevel} from "../../utils/common";

const Overview = (props) => {
  const {score, ratingsCount, descriptions, director, actors} = props;
  const formattedScore = `${Math.floor(score)},${Math.round((score - Math.floor(score)) * 10)}`;
  const ratingLevel = getRatingLevel(score);
  const renderStarring = (starringActors) => starringActors.reduce(
      (acc, actor, index) => {
        if (index !== actors.length - 1) {
          return acc + actor + `, `;
        } else {
          return acc + actor;
        }
      },
      ``
  );

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formattedScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingsCount} rating{ratingsCount === 1 ? `` : `s`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {descriptions.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          );
        })}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {renderStarring(actors)}
        </strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {
  score: PropTypes.number.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  descriptions: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default Overview;
