import React, { useState } from "react";

const ExpenseForm = () => {
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmout: "",
  //     enteredDate: "",
  //   });
  //here need to declare as seperate states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // disadvantge: when click on submit button, the page reload, bc the browser actually automatically sends a request
  //whenever a form is submitted to the server whichever is hosting the page(here the development server, and this is not what we want). we
  //want to handle the data with js, we can prevent the default behavior
  // const submitHandler = () => {};
  const submitHandler = (event) => {
    event.preventDefault(); // add prevent the default behavior

    // below enteredTitle,enteredAmout,enteredDate point to above decalred state variables
    const expendseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // construct new date with Date constructor by passing enteredDate, which will pass the entered date string and convert it into a Date object
    };

    console.log(expendseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="  new-expense_controls">
        <div className="new-expense_control ">
          <label> Title </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense_control ">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense_control ">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense_actions">
          <button type="submit"> Add expense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
//onInput for key strock
//onChange for key strock for same events of all input type
//  <input type="text" onChange={ titleChangeHandler} />  here passed pointer
//vanila javascript( js without react )

//we could add an listener for button when submit form
//   <button type="submit" onClick =""> Add expense </button> , but this would not be the best way of listening
// bc there is a default behaviour that built into browser that built into forms on webpages
//if a button is pressed instead of a form , the overal form element will emit an event to which we can listen, and that the submit event for form
