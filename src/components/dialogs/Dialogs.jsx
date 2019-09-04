import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsState.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesElements =
        props.dialogsState.messagesData.map(message => <Message message={message.message}/>)

    let postRef = React.createRef();

    let addPost = () => {
        let text = postRef.current.value;
        alert(text);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={postRef}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;