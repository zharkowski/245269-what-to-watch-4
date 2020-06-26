import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, releaseYear} = props;
  return (
    <Main
      title={title}
      genre={genre}
      releaseYear={releaseYear}
    />
  );
};

export default App;
