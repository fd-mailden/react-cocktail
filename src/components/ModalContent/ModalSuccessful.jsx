import React,{useEffect}from "react";
import successfulIcon from '../../assets/img/modal/successful.svg';
import ButtonPay from "../UI/ButtonPay/ButtonPay";

function ModalSuccessful({allSuccessful, windowClose}) {
  useEffect(() => {
    allSuccessful()
  }, []);
  
  return (
    <div className="modal-successful">
      <img  className="modal-successful__img" src={successfulIcon} alt="successfulIcon" />
      <h1 className="modal-successful__title">Payment successful</h1>
      <ButtonPay onClick={()=>{windowClose()}} >Ok</ButtonPay>
    </div>
  );
}

export default ModalSuccessful;
