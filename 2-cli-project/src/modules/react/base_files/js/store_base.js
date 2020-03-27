import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers";
  
const middleware = applyMiddleware(thunk, promise);
  
const Store = createStore(
    reducers,
    middleware
);
  
export default Store;
