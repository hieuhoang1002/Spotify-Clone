import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Reducers from "./pages/Playlist_detail/reducers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider
        store={createStore(
          Reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
