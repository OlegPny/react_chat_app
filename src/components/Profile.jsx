import React from 'react';
import './Profile.css';

const Profile = () => {
    return <div className='content'>
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
            <div className='posts'>
                <div className='item'>
                    post1
                </div>
                <div className='item'>
                    post2
                </div>
            </div>
        </div>
    </div>;
}

export default Profile;