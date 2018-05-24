import React from 'react';
import Redux from 'react-redux';
import action from '../actions/index';

const initial_state = () => {
  return ({name: ''})
}

const rootReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'FILTER_LIST':
      return action.payload ;
    default:
      return state;
  }
};

export default rootReducer ;