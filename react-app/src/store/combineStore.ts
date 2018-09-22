
// import { Store, createStore, compose, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import { state, State } from './reducers';

// export const store: Store<State> = createStore(
//   state,
//   compose(
//     applyMiddleware(reduxThunk),
//   )
// );
import { combineReducers } from 'redux';
import loginReducer from "../app/user/login/reducer";
import counter from "../components/hello/reducers/index";

const rootReducer = combineReducers({
    loginReducer,
    counter,                   // key name same as the carefully renamed named export
});

export default rootReducer;

