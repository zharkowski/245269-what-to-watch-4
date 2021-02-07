import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component, initialItem) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: initialItem,
      };

      this._itemSetActiveHandler = this._itemSetActiveHandler.bind(this);
    }

    _itemSetActiveHandler(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          itemSetActiveHandler={this._itemSetActiveHandler}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
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
    }),
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          userName: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          comment: PropTypes.string.isRequired,
          date: PropTypes.instanceOf(Date).isRequired,
        }).isRequired
    ),
    films: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
        }).isRequired
    ),
  };

  return WithActiveItem;
};

export default withActiveItem;
