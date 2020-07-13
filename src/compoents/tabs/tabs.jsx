import React from "react";
import {Tab} from "../../constants";

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

  _getCompoentByTab(tab) {
    switch (tab) {
      case Tab.OVERVIEW:
        return <>overview</>;
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

        {this._getCompoentByTab(this.state.activeTab)}
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

export default Tabs;
