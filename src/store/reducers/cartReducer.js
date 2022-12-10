const defaultState = {
  cart: [],
  totalPrice: 0,
  totalCount: null,
  isTokenSuccess: "",
};

const getTotalPrice = (arr) =>
  arr.reduce((sum, obj) => obj.total_price + sum, 0);

const GET_ITEM_TO_CART = "GET_ITEM_TO_CART";
const REMOVE_CARD_ITEM = "REMOVE_CARD_ITEM";
const COUNT_PRICE = "COUNT_PRICE";
const COUNT_TOTAL_PRICE = "COUNT_TOTAL_PRICE";
const CLEAR_CART = "CLEAR_CART";
const ADD_ITEM_FROM_STORE = "ADD_ITEM_FROM_STORE";
const GET_TOKEN = "GET_TOKEN";
const TOTAL_COUNT = 'TOTAL_COUNT'

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ITEM_TO_CART:
      const newItem = action.payload;
      const newState = [...state.cart];
      let value = newState.findIndex(
        (item) => item.idDrink === newItem.idDrink
      );
      if (value === -1) {
        newState.push(newItem);
        
        state.totalCount = state.totalCount + 1;
      }
      return { ...state, cart: newState , };

    case COUNT_TOTAL_PRICE:
      return { ...state, totalPrice: getTotalPrice(state.cart) };

    case TOTAL_COUNT:
      return { ...state, totalCount: action.payload };

    case ADD_ITEM_FROM_STORE:
      const item = action.payload;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + item.total_price,
      };

    case REMOVE_CARD_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.idDrink !== action.payload),
        totalCount: state.totalCount - 1,
        totalPrice: getTotalPrice(state.cart),
      };

    case COUNT_PRICE:
      var itemId = action.payload.itemId;
      var isPlus = action.payload.isPlus;
      for (let i = 0; i < state.cart.length; i++) {
        if (itemId === state.cart[i].idDrink) {
          if (isPlus) {
            state.cart[i].quantity = state.cart[i].quantity + 1;
            state.cart[i].total_price =
              state.cart[i].quantity * state.cart[i].price;
            state.totalPrice = getTotalPrice(state.cart);
          } else if (!isPlus && state.cart[i].quantity >= 2) {
            state.cart[i].quantity -= 1;
            state.cart[i].total_price =
              state.cart[i].quantity * state.cart[i].price;
            state.totalPrice = getTotalPrice(state.cart);
          }
        }
      }
      return { ...state };

    case GET_TOKEN:
      return { ...state, isTokenSuccess: action.payload };

    case CLEAR_CART:
      return { totalPrice: 0, totalCount: 0, cart: [], isTokenSuccess: null };

    default:
      return state;
  }
};
