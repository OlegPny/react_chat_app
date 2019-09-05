import state, {addPost, subscribe, updateNewPostText} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText} />,
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);






