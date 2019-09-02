import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = () => {

    let postsData = [
        {id: 1, message: 'This is my first experiment with props', likesCount: 12},
        {id: 2, message: 'Hi how are you?', likesCount: 10},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData = {postsData}/>
        </div>
    )
}

export default Profile;