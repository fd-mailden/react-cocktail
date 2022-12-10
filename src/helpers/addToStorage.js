export default function addToStorage(data) {
  let arrCart = JSON.parse(localStorage.getItem("cart")) || [];
  let countItem = JSON.parse(localStorage.getItem("count")) ;
  
  let value = arrCart.findIndex((item) => item.idDrink === data.idDrink);
  if (value === -1) {
    arrCart.push(data);
    countItem += 1;
  }

  localStorage.setItem("cart", JSON.stringify(arrCart));

  localStorage.setItem("count", JSON.stringify(countItem));
}
