import { actionTypes } from "./actionTypes";
import axios from "axios";

export const fetchDetails = () => async (dispatch) => {
  const response = await axios.get("https://breakingbadapi.com/api/characters");
  console.log(response);
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data,
  });
};

export const fetchSearchDetails = (payload) => async (dispatch) => {
  const response = await axios.get(
    `https://www.breakingbadapi.com/api/characters?name=${payload}`
  );
  dispatch({
    type: actionTypes.FETCH_SEARCHDATA,
    payload: response.data,
  });
};
