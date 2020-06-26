import React from "react";
import ReactDOM from "react-dom";
import App from "./compoents/app/app.jsx";

const PromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: `2014`,
};

ReactDOM.render(
    <App
      title={PromoFilm.title}
      genre={PromoFilm.genre}
      releaseYear={PromoFilm.releaseYear}
    />,
    document.getElementById(`root`)
);
