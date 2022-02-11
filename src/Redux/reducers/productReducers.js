import { actionType } from "../constants/action-type";

const initialState = {
    products: []
}

const usersState = {
  users: []
}

export const productReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
          return { ...state, products: payload };
        default:
          return state;
    }
}

export const usersReducer = (state=usersState, {type, payload}) => {
  switch (type) {
      case actionType.SET_USERS:
        return { ...state, users: payload };
      default:
        return state;
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
