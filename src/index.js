import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { createStore } from "redux";
import { Provider } from "react-redux";

// import {carReducer} from './reducers';

// const store = createStore(carReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider>
    <App />
</Provider>, rootElement);
