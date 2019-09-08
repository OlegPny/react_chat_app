import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(post => <Post message={post.message} likeCount={post.likesCount}/>);

    let textAreaRef = React.createRef();

    let addPost = () => {
        props.addPost(); //addPost вызван от имени props, и this ссылается на свойства и методы props
    };

    let onPostChange = () => {
        let text = textAreaRef.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={textAreaRef} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;