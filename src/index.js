import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import { createStore, combineReducers } from 'redux';


const store = createStore();

render(
  <App/>,document.getElementById('root')
);
