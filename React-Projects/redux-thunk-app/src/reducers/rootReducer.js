import { combineReducers } from "redux";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    fakeStore: productReducer,
});

export default rootReducer;