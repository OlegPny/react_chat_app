import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='http://www.coollady.ru/pic/0001/avatar/avatar-49.jpg'></img>
            post1
                <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;