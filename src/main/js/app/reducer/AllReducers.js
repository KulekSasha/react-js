import {combineReducers} from "redux";
import users from "./UsersReducer";
import {routerReducer} from "react-router-redux";



const AAAReducer = (state = '', action) => {

    switch (action.type) {
        case 'AAA':
            return 'CCC'+ new Date();
            break;
        default:
            return state;
    }
};



const allReducers = combineReducers({
    users: users,
    AAA: AAAReducer,
    routing: routerReducer
});

export default allReducers;