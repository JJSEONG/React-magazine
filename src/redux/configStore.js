import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import magazin from "./modules/magazin"

const middlewares = [thunk];
const rootReducer = combineReducers({magazin});
const enhancer = applyMiddleware(...middlewares)

const configStore = createStore(rootReducer, enhancer);

export default configStore;