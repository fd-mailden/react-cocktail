const defaultState = {
  cocktails: [],
  relatedCocktails: [],
};
const GET_COCKTAILS = "GET_COCKTAILS";
const GET_SEARCHED_COCKTAILS = "GET_SEARCHED_COCKTAILS";
export const cocktailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      return { ...state, cocktails: action.payload };

    case GET_SEARCHED_COCKTAILS:
      return { ...state, relatedCocktails: action.payload };

    default:
      return state;
  }
};
