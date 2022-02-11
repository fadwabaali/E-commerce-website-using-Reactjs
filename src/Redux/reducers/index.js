import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,usersReducer } from "./productReducers";


const reducers = combineReducers({
    allProducts: productReducer,
    allUsers: usersReducer,
    product: selectedProductReducer,
})

export default reducers