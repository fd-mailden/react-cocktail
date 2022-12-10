import React, { useCallback } from "react";
import TableRow from "./UI/TableRow/TableRow";
import { useDispatch } from "react-redux";
import {
  removeCartAction,
  changeTotalPrice,
  changeTotalPriceItem,
} from "../store/actions/cartActions";
import { removeItemFromStorage } from "../helpers/removeItemFromStorage";

function Table({ setModalActive, itemsCart }) {
  const dispatch = useDispatch();
  function removeItemCart(value) {
    dispatch(removeCartAction(value));
    removeItemFromStorage(value);
    dispatch(changeTotalPrice());
  }

  const setNumberValue = useCallback((id, value) => {
    let data = {
      itemId: id,
      isPlus: value,
    };
    dispatch(changeTotalPriceItem(data));
  }, []);

  return (
    <div className="table">
      <div className="table__header">
        <h2 className="table__title col-3">Product Name & Details</h2>
        <h2 className="table__title col-3">Quantity</h2>
        <h2 className="table__title col-3">Price</h2>
      </div>

      <div>
        {itemsCart.map((value, index) => (
          <TableRow
            key={index}
            setNumberValue={setNumberValue}
            setModalActive={setModalActive}
            itemCart={value}
            removeItemCart={removeItemCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
