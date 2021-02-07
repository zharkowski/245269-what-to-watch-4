import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = React.memo((props) => {
  const {children} = props;
  return (
    <>
      {children}
    </>
  );
});

VideoPlayer.displayName = `VideoPlayer`;


VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default VideoPlayer;
