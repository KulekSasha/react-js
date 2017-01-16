const UsersReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_USERS_RECEIVED':
            return action.data;
            break;
        case 'DELETE_USER_SUCCESS':
            return state.filter(
                (el) => {
                    return el._links.self.href !== action.link
                });
            break;
        default:
            return state;
    }
};

export default UsersReducer;