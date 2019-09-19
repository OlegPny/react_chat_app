import store from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={store.getState()} //getState() вызван от имени store
                         dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);






