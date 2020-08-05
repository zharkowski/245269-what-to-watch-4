import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  render() {
    const {children} = this.props;
    return (
      <>
        {children}
      </>
    );
  }
}

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default VideoPlayer;
