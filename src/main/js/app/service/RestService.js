'use strict';

import restClient from "./RestClient";

const restService = store => next => action => {

    switch (action.type) {
        case 'GET_USERS':
            restClient({method: 'GET', path: '/api/users'}).done(
                function (resp) {
                    let data = resp.entity._embedded.users;
                    return next({
                        type: 'GET_USERS_RECEIVED',
                        data
                    })
                },
                function (resp) {
                    return next({
                        type: 'GET_USERS_ERROR',
                        resp
                    })
                },
            );
            break;

        default:
            break
    }

};


export default restService;




