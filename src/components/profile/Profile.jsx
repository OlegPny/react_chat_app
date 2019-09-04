import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {props.profileState.postsData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;