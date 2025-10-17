import { CLEAR_Array, CLEAR_OBJECT, UPDATE_LOADER, PRODUCT_DATA } from "./actionType";

const setCommonReducer = (state, action, actionName) => {
    switch(action.type) {
        case actionName:
            return action.payload;
        default:
            return state;
    }
} 

/* const setCommonReducerV2 = (state, action, actionName) => {
    switch(action.type) {
        case actionName:
            return {...state, ...action.payload};
        case CLEAR_OBJECT:
            return {};
        default:
            return state;
    }
}  */

/* const setCommonReducerArray = (state, action, actionName) => {
    switch(action.type) {
        case actionName:
            return [...state, ...action.payload];
        case CLEAR_Array:
            return [];
        default:
            return state;
    }
} */

export const setGlobalLoader = (state = false, action) => setCommonReducer(state, action, UPDATE_LOADER);
export const getProdectData = (state = [], action) => setCommonReducer(state, action, PRODUCT_DATA);