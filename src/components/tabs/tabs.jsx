import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../constants";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";

const Tabs = React.memo((props) => {
  const tabs = Object.keys(Tab);
  const {getHandleTabClick} = props;

  const getComponentByTab = (tab) => {
    const {film, reviews} = props;
    const {actors, genre, releaseYear, descriptions, director, ratingsCount, score, runtime} = film;
    switch (tab) {
      case Tab.OVERVIEW:
        return <Overview
          actors={actors}
          descriptions={descriptions}
          director={director}
          ratingsCount={ratingsCount}
          score={score}
        />;
      case Tab.DETAILS:
        return (
          <Details
            actors={actors}
            director={director}
            genre={genre}
            releaseYear={releaseYear}
            runtime={runtime}
          />);
      case Tab.REVIEWS:
        return <Reviews
          reviews={reviews}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, index) => {
            const tabName = Tab[tab][0].toUpperCase() + Tab[tab].slice(1);
            return (
              <li
                key={index}
                className={`movie-nav__item ${Tab[tab] === props.activeTab ? `movie-nav__item--active` : ``}`}
                onClick={getHandleTabClick(tab)}
              >
                <a href="#" className="movie-nav__link">{tabName}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {getComponentByTab(props.activeTab)}
    </div>
  );
});

Tabs.displayName = `Tabs`;

Tabs.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    descriptions: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        userName: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
      }).isRequired
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  getHandleTabClick: PropTypes.func.isRequired,
};

export default Tabs;
