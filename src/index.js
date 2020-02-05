import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Provider } from 'react-redux';
import {createStore, applyMiddleware , combineReducers} from 'redux';
import CakeReducer from './ReduxCake/CakeReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './ReduxCake/UserReducer';
import thunk from 'redux-thunk';



const rootReducer = combineReducers({
    CakeReducer:CakeReducer,
    UserReducer: userReducer
})
const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
