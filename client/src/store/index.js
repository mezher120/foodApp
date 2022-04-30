import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 

export default store;


// const store = createStore(
//     reducer,
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );