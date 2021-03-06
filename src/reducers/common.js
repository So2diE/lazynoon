import {COMMON_EDIT_SEARCH_BAR,} from "../constants/actionType";


const defaultState = {
    searchBar: '',

};

export default (state = defaultState, action) => {

    switch (action.type) {

        case COMMON_EDIT_SEARCH_BAR: {
            let searchBar = action.payload ? action.payload : ''
            return {
                ...state,
                searchBar: searchBar
            }
        }

        default:
            return state
    }
}


