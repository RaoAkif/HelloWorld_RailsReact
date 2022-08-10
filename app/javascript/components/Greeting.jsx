import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import './Greeting.css';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  console.log('getGreeting(), Action!!');
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('v1/greeting.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch(getThingsSuccess(json));
      })
      .catch((error) => console.log(error));
  };
}

export function getThingsSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <div className="greet">
        <h2>Greeting: {this.props.greeting}</h2>
        <button
          className="getGreetingBtn"
          onClick={() => this.props.getGreeting()}
        >
          Get Greeting
        </button>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelector, mapDispatchToProps)(Greeting);
