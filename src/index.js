import store from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={store.getState()} //getState() вызван от имени store
                         addPost={store.addPost} //колбек- функция отдалась кому-то
                         updateNewPostText={store.updateNewPostText} />,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);






