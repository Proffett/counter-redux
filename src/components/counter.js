import React from "react";
import "../index.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <div className="number">
        <h1 className="counter">{counter}</h1>
      </div>
      <div className="btn_group">
        <button onClick={dec} className="dec btn btn-primary"></button>
        <button onClick={inc} className="inc btn btn-primary"></button>
        <button onClick={rnd} className="rnd btn btn-primary"></button>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
