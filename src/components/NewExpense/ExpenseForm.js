import React, { useState } from "react";

const ExpenseForm = () => {
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

  const submitHandler = (event) => {
    event.preventDefault(); // add prevent the default behavior

    // below enteredTitle,enteredAmout,enteredDate point to above decalred state variables
    const expendseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // construct new date with Date constructor by passing enteredDate, which will pass the entered date string and convert it into a Date object
    };

    console.log(expendseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // Two way binding: for input, we don't just listen to changes, but we can also pass a new value back to input
  // so that we can reset or change the input programmatically: add value attribue , which is a default attribute to the input element
  //This will set the internal value property , whichever input element has, and can set it to a new value
  // now it's two way biding bc we don't jsut listen to changes in the input to update our state, but we also feed the state back to the input
  // so that we change the state, we also change the input,
  // advange: can set  setEnteredTitle(''); back to an empty string so we can override what the user entered
  //after the form was submitted and therefore cleared the input

  return (
    <form onSubmit={submitHandler}>
      <div className="  new-expense_controls">
        <div className="new-expense_control ">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense_control ">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense_control ">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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
