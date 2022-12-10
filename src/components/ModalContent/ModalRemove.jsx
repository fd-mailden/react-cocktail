import React from "react";
import { Button } from "../UI";
import removeIcon from "../../assets/img/modal/remove.svg";
import closeIcon from "../../assets/img/modal/close_modal.svg";

function ModalRemove({ setModalActive, clearStore, }) {
  return (
    <div className="modal-remove">
      <img
        className="modal-remove__close"
        src={closeIcon}
        alt="closeIcon" 
        onClick={() => setModalActive(false)}
      />
      <div className="modal-remove__inner">
        <img className="modal-remove__img" src={removeIcon} alt="removeIcon" />
        <h1 className="modal-remove__title">Remove / Cancel Order</h1>
        <p className="modal-remove__paragraph">
          You’re about to cancel ya order and this will also <br />
          remove the item from your cart either
        </p>
        <Button onClick={() => clearStore()}>Proceed</Button>
      </div>
    </div>
  );
}

export default ModalRemove;
