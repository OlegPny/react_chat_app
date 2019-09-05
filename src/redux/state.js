let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
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
};

// нарушение принципа чистых функций
export let addPost = () => {
    let newPost = {
        id : state.profileState.postsData.length + 1,
        message: state.profileState.newPostText,
        likesCount: 0

    };

    state.profileState.postsData.push(newPost);
    state.profileState.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profileState.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer
}


export default state;