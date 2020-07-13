import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../constants";
import Overview from "../overview/overview.jsx";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Tab.OVERVIEW,
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
    const {film} = this.props;
    switch (tab) {
      case Tab.OVERVIEW:
        const {actors, descriptions, director, ratingsCount, score} = film;
        return <Overview
          actors={actors}
          descriptions={descriptions}
          director={director}
          ratingsCount={ratingsCount}
          score={score}
        />;
      case Tab.DETAILS:
        return <>details</>;
      case Tab.REVIEWS:
        return <>reviews</>;
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
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">Wes Andreson</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                    Ralph Fiennes, <br/>
                    Jeff Goldblum
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">1h 39m</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">Comedy</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">2014</span>
            </p>
          </div>
        </div>
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
  }).isRequired,
};

export default Tabs;
