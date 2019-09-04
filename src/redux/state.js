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
        ]
    }
};

// нарушение принципа чистых функций
let addPost = (postMessage) => {
    let newPost = {
        id : 3,
        message : postMessage,
        likesCount: 0
    };

    state.profileState.postsData.push(newPost);
};

export default state;