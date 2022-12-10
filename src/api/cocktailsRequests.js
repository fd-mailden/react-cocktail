import axiosInstance from "./axiosInstance";
import addToCocktails from "../helpers/addToCocktails";
import axios from "axios";
import { withSnackbar } from "notistack";

export const cocktailsRequests = () => {
  return async (dispatch) => {
    const { data } = await axiosInstance().get(`search.php`, {
      params: { f: "a" },
    });
    if (data)
      dispatch({
        type: "GET_COCKTAILS",
        payload: addToCocktails(data.drinks),
      });
  };
};

export const itemForCocktailPageRequests = () => {
  return async (dispatch) => {
    const { data } = await axiosInstance().get(`search.php`, {
      params: { f: "a" },
    });
    if (data)
      dispatch({
        type: "GET_SEARCHED_COCKTAILS",
        payload: addToCocktails(data.drinks),
      });
  };
};

export const searchCocktailsRequests = (value) => {
  return async (dispatch) => {
    const { data } = await axiosInstance().get(`search.php?s=${value}`);

    if (data.drinks) {
      dispatch({
        type: "GET_SEARCHED_COCKTAILS",
        payload: addToCocktails(data.drinks),
      });
    } else {
      dispatch({
        type: "GET_SEARCHED_COCKTAILS",
        payload: false,
      });
    }
  };
};

export const filterByDrinks = (type, categoryValue, value) => {
  return async (dispatch) => {
    const { data } = await axiosInstance().get(
      `${type}.php?${categoryValue}=${value}`
    );
    if (data)
      dispatch({
        type: "GET_SEARCHED_COCKTAILS",
        payload: addToCocktails(data.drinks),
      });
  };
};

export const tokenRequests = (value) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${process.env.REACT_APP_POST_CARD}`, value, {
      headers: {
        "content-type": "application/json",
        Authorization: process.env.REACT_APP_KEY,
      },
    });

    if (data?.token) {
      dispatch({
        type: "GET_TOKEN",
        payload: data.token,
      });
    }
  };
};
