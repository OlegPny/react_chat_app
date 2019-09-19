let store = {
    _state: {
        dialogsState: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},

            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ]
        },

        profileState: {
            postsData: [
                {id: 1, message: 'This is my first experiment with props', likesCount: 12},
                {id: 2, message: 'Hi how are you?', likesCount: 10},
            ],

            newPostText: 'Введите текст...'
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    _addPost() {
        let newPost = {
            id: this._state.profileState.postsData.length + 1,
            message: this._state.profileState.newPostText,
            likesCount: 0
        };

        this._state.profileState.postsData.push(newPost);
        this._state.profileState.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText){
        this._state.profileState.newPostText = newText;
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state; //переменной _state нету, есть свойство у обьекта this
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profileState.postsData.length + 1,
                message: this._state.profileState.newPostText,
                likesCount: 0
            };

            this._state.profileState.postsData.push(newPost);
            this._state.profileState.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profileState.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;