import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className='dialog'>
                    Юзер 1
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Юзер 2
                </div>
                <div className={s.dialog}>
                    Юзер 3
                </div>
                <div className={s.dialog}>
                    Юзер 4
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