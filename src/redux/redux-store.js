import { applyMiddleware, combineReducers, createStore } from "redux";
import formReducer from "./formReducer";
import  thunkMiddleware  from "redux-thunk";

const reducers = combineReducers({
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store