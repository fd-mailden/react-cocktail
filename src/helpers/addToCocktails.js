export default function addToCocktails(arr) {
  let array = arr.map((element) => {
    element.price = 80;
    element.quantity = 1;
    element.total_price = 80;
    if (element.idDrink % 2 == 0) {
      element.categoryName = "free";
    } else {
      element.categoryName = "premium";
    }
    return element;
  });

  return array;
}
