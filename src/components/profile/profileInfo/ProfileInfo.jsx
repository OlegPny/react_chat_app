import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://dok7xy59qfw9h.cloudfront.net/2e4/ef623/4ee2/434b/b5c7/361487a67a0e/large/5498816.jpg' alt=''></img>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;