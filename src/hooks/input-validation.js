import React, { useState } from "react";

const useInput = (validatingFn) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validatingFn(enteredInput);
  const inputHasError = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (e) => {
    setEnteredInput(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false);
  };

  return {
    value: enteredInput,
    inputIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
