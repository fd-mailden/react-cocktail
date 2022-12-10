export const addCartAction = (payload) => ({
  type: "GET_ITEM_TO_CART",
  payload,
});

export const addItemFromStore = (payload) => ({
  type: "ADD_ITEM_FROM_STORE",
  payload,
});

export const removeCartAction = (payload) => ({
  type: "REMOVE_CARD_ITEM",
  payload,
});

export const changeTotalPriceItem = (payload) => ({
  type: "COUNT_PRICE",
  payload,
});

export const changeTotalPrice = (payload) => ({
  type: "COUNT_TOTAL_PRICE",
  payload,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const tokenSuccessAction = (payload) => ({
  type: "GET_TOKEN",
  payload,
});
export const totalCountAction = (payload) => ({
  type: "TOTAL_COUNT",
  payload,
});

