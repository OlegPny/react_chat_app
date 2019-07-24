import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className='dialog'>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )

}


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="User1" id="1" />
                <DialogItem name="User2" id="2" />
                <DialogItem name="User3" id="3" />
                <DialogItem name="User4" id="4" />
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет!</div>
                <div className={s.message}>Как дела?</div>
            </div>
        </div>
    )
}

export default Dialogs;