import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./../stateManager/reduxers";

export default createStore(rootReducer, applyMiddleware(thunk));
