import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux'




const articlesReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      console.log('ADD_ARTICLE');
      console.log('action : ',action);
      action.payload.id = Date.now();
      const newState = [...state, action.payload];
      return newState;
      //break;
    case "EDIT_ARTICLE":
      console.log('EDIT_ARTICLE');
      console.log('action : ',action);

      const articleId = action.payload.id;
      return state.map(article => {
        if(article !== articleId){
          return article;
        }
        return action.payload;
      })
    default:
      return state;

  }
};


const store = createStore(
  combineReducers({
  articles: articlesReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;



render(
  <Provider store={store}><App/></Provider>,document.getElementById('root')
);
