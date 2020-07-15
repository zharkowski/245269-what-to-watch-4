import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../constants";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Tab.REVIEWS,
    };

    this._getHandleTabClick = this._getHandleTabClick.bind(this);
  }

  _getHandleTabClick(tab) {
    return (evt) => {
      evt.preventDefault();
      this.setState({activeTab: Tab[tab]});
    };
  }

  _getComponentByTab(tab) {
    const {film, reviews} = this.props;
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
  }

  render() {
    const tabs = Object.keys(Tab);
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, index) => {
              const tabName = Tab[tab][0].toUpperCase() + Tab[tab].slice(1);
              return (
                <li
                  key={index}
                  className={`movie-nav__item ${Tab[tab] === this.state.activeTab ? `movie-nav__item--active` : ``}`}
                  onClick={this._getHandleTabClick(tab)}
                >
                  <a href="#" className="movie-nav__link">{tabName}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        {this._getComponentByTab(this.state.activeTab)}
      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
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
};

export default Tabs;
