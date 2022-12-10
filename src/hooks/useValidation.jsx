import React, { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [inputValid, serInputValid] = useState(false);
  const [isPhone, setPhoneError] = useState(false);
  const [minLength, setMinLength] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation] || isNaN(value)
            ? setMinLength(true)
            : setMinLength(false);
          break;

        case "isPhone":
          const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){9,14}(\s*)?$/;
          re.test(Number(value)) ? setPhoneError(false) : setPhoneError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLength || isPhone) {
      serInputValid(false);
    } else {
      serInputValid(true);
    }
  }, [isEmpty, minLength, isPhone]);

  return { isEmpty, inputValid, minLength, isPhone };
};
