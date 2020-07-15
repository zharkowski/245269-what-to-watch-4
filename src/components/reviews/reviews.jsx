import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Reviews = (props) => {
  const {reviews} = props;
  const createReviewTemplate = (review, key) => {
    const {comment, userName, date, rating} = review;
    const formattedRating = `${Math.floor(rating)},${Math.round((rating - Math.floor(rating)) * 10)}`;
    const dateTime = moment(date).format(`YYYY-MM-DD`);
    const formattedDate = moment(date).format(`MMMM D, YYYY`);
    return (
      <div key={key} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{userName}</cite>
            <time className="review__date" dateTime={dateTime}>{formattedDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{formattedRating}</div>
      </div>
    );
  };

  const renderReviews = (reviewsToRender) => {
    const reviewsHalfLength = Math.ceil(reviews.length / 2);
    return (
      <>
        <div className="movie-card__reviews-col">
          {reviewsToRender.slice(0, reviewsHalfLength).map(createReviewTemplate)}
        </div>
        <div className="movie-card__reviews-col">
          {reviewsToRender.slice(reviewsHalfLength).map(createReviewTemplate)}
        </div>
      </>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      {renderReviews(reviews)}
    </div>

  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        userName: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
};

export default Reviews;
