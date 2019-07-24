import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='This is my first experiment with props' likeCount='20' />
                <Post message='Hi how are you?' likeCount='25' />
            </div>
        </div>
    )
}

export default MyPosts;