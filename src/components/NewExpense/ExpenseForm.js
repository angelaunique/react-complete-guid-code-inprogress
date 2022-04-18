import React, { useState } from "react";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput, //by using spread operator we ensure other part of the states are not throw away but it's part of new state
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmout: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
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
