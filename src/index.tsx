import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from "./containers/Hello";
import "./index.css";
import { enthusiasm } from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";
import { IStoreState } from "./types/index";

/* tslint:disable:interface-name */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

const store = createStore<IStoreState>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: "TypeScript"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
