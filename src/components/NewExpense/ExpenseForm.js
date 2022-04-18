import React, { useState } from "react";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmout: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // This way sometime could fail bc i'm depending on the previous state snapshot to copy the existing value
    //and just override one value with a new one, when use a counter at the same time, need to use another alternative way
    // setUserInput({
    //   ...userInput, //by using spread operator we ensure other part of the states are not throw away but it's part of new state
    //   enteredTitle: event.target.value,
    // });

    //will automatically excucated by react will receive the previous state snapshot
    // and return updated state

    // in many cases, both ways would work, but react  schedules updates, if you schedule a lot of updates at the
    //same time, you could depending and outdated or incorrect state snapshot

    // if use below apporach, react will guarentee that the snapshot it gives you here
    // in this innner function will always be the latest snapshot keeping all scheduled states in mind
    // Thus this is a safter way. So if states update depends on the previous state, use this function form

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmout: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmout: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
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
