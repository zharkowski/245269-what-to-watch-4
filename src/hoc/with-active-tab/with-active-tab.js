import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../constants";

const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
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

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          getHandleTabClick={this._getHandleTabClick}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
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
  };

  return WithActiveTab;
};

export default withActiveTab;
