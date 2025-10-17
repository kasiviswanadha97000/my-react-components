import { combineReducers } from "redux";
import { setGlobalLoader, getProdectData } from "./reducer";


const rootReducer = combineReducers({
    setGlobalLoader,
    getProdectData,
});

export default rootReducer;