import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className='dialog'>
                    <NavLink to="/messages/1">Юзер 1</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/messages/2">Юзер 2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/3">Юзер 3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/messages/4">Юзер 4</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Кураж, епта, ты где?</div>
                <div className={s.message}>Пора к милфам</div>
            </div>
        </div>
    )
}

export default Dialogs;