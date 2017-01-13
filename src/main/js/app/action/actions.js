export const getUsersAction = () => {
    return {
        type: 'GET_USERS',
        data: []
    }
};

export const getUsersErrorAction = () => {
    return {
        type: 'GET_USERS_ERROR'
    }
};

export const getUsersReceivedAction = () => {
    return {
        type: 'GET_USERS_RECEIVED'
    }
};