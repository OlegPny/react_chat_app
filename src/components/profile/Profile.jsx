import React from 'react';
import MyPosts from './myposts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;