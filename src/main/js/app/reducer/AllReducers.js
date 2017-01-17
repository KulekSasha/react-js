import {combineReducers} from "redux";
import users from "./UsersReducer";
import {routerReducer} from "react-router-redux";




const allReducers = combineReducers({
    users: users,
    routing: routerReducer
});

export default allReducers;