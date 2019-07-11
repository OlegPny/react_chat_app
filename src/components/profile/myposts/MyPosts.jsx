import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
          <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='This is my first experiment with props' likeCount='20' />
                <Post message='Hi how are you?' likeCount='25' />
            </div>
        </div>
    )
}

export default MyPosts;