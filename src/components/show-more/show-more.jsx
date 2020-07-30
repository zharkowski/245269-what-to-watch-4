import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

const ShowMore = (props) => {
  const {handleClick} = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(ActionCreator.increaseShowingFilmsCount());
  },
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
