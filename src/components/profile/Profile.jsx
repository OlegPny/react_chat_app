import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './myposts/MyPosts';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://www.desktopbackground.org/p/2012/03/30/366906_unbelievable-wallpapers-wallpapers-cave_1920x1080_h.jpg' alt=''></img>
        </div>
        <div>
            Ava + Desc
        </div>
        <MyPosts />
    </div>;
}

export default Profile;