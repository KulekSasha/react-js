'use strict';

import restClient from "./RestClient";
import * as actions from "../action/Actions";


const restService = store => next => action => {

    let z = store.getState();

    switch (action.type) {
        case actions.getUsersAction().type:
            restClient({method: 'GET', path: '/api/users'}).done(
                function (resp) {
                    let data = resp.entity._embedded.users;
                    return next({
                        type: actions.getUsersReceivedAction().type,
                        data
                    })
                },
                function (resp) {
                    return next({
                        type: actions.getUsersErrorAction().type,
                        resp
                    })
                },
            );
            break;

        case 'DELETE_USER':
            restClient({method: 'delete', path: action.link}).done(
                function (resp) {
                    return next({
                        type: 'DELETE_USER_SUCCESS',
                        link: action.link
                    })
                },
                function (resp) {
                    return next({
                        type: 'DELETE_USER_ERROR',
                        resp
                    })
                },
            );
            break;

        case '@@router/LOCATION_CHANGE':
            return next({
                type: 'AAA',

            });


            break


        default:
            break;
    }

};


export default restService;




