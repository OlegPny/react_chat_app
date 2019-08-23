import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'This is my first experiment with props', likesCount: 12},
        {id: 2, message: 'Hi how are you?', likesCount: 10},
    ]

    let postsElements = postsData.map(post => <Post message={post.message} likeCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;