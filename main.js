import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './src/reducers/reducer';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));