import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./components/app";
import { Provider } from "react-redux";

const store = createStore(reducer);

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// document.querySelector(".inc").addEventListener("click", inc);
// document.querySelector(".dec").addEventListener("click", dec);
// document.querySelector(".rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });
