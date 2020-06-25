import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
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
