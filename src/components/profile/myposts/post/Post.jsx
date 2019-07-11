import React from 'react';
import classes from './Post.module.css';
import { isPatternLike } from '@babel/types';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://dota2.ru/img/forum/avatars/l/490/490004.jpg?1550514780'></img>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;