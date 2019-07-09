import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://www.desktopbackground.org/p/2012/03/30/366906_unbelievable-wallpapers-wallpapers-cave_1920x1080_h.jpg' alt=''></img>
        </div>
        <div>
            Ava + Desc
        </div>
        <div>
            My posts
          <div>
            New Post
        </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>
        </div>
    </div>;
}

export default Profile;