export const removeItemFromStorage = (data) => {
  let arrCart = JSON.parse(localStorage.getItem("cart")) || [];
  let countItem = JSON.parse(localStorage.getItem("count"));
  countItem=countItem -1
  let index = arrCart.findIndex((item) => item.idDrink === data );
  arrCart.splice(index, 1)

  localStorage.setItem("cart", JSON.stringify(arrCart));
  localStorage.setItem("count", JSON.stringify(countItem));

};
