import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import { createStore, combineReducers } from 'redux';




const articlesReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      console.log('ADD_ARTICLE');
      console.log('action',action);
      action.payload.id = Date.now();
      const newState = [...state, action.payload];
      return newState;
      //break;
    default:
      return state;

  }
};


const store = createStore(
  combineReducers({
  articles: articlesReducer
  })
);

render(
  <App/>,document.getElementById('root')
);
