import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./mocks/films";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";
import withActiveFilm from "./hoc/with-active-film/with-active-film";
import {filmDetails} from "./mocks/films";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const AppWithActiveFilm = withActiveFilm(App);

ReactDOM.render(
    <Provider
      store={store}
    >
      <AppWithActiveFilm
        promoFilm={filmDetails}
        films={films}
      />
    </Provider>,
    document.getElementById(`root`)
);
