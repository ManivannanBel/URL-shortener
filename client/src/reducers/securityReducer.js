import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    isAuthenticated : false,
    user: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }

        default:
            return state;
    }
}

const isEmpty = (value) => {
    return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value ===         'string' && value.trim().length === 0);
}

