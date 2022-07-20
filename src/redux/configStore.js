import { legacy_createStore as createStore, combineReducers } from "redux";
import magazin from "./modules/magazin"

const rootReducer = combineReducers({magazin});
const configStore = createStore(rootReducer);

export default configStore;