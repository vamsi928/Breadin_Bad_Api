import { combineReducers } from "redux";
import { actionTypes } from "./actionTypes";

const InitialState = {
  characters: [],
  isLoading: true,
};

const AppReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return { ...state, characters: action.payload, isLoading: false };
    case actionTypes.FETCH_SEARCHDATA:
      return { ...state, characters: action.payload, isLoading: false };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  AppReducer,
});
