import React, { useState } from "react";

const ExpenseForm = () => {
  //document.getElementById('').addEventListener('click',(event)=>{}) //vanila javascript return event object from click
  //same as above way to get event, below handler also get event, just add event parameter inside of titleChangeHandler = (event)
  const [enteredTitle, setEnteredTilte] = useState(""); //initally when the component rendered for the first time, nothing was entered, so empty string for para
  // the function to update the state is setEnteredTilte

  const [enteredAmout, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    /*console.log(event); */ // get event when event occurs at the point of time this event occurs
    // will get a lot of date for event, there is a field "input " which will simply
    //points at thte DOM element for which the events occured
    // the value property holds the current value of this input
    /* console.log(event.target.value); // This is the way to get the value! */
    // to store the input value, when form is submit, so we can use that value
    // one way to make sure the input survives even after the component "return " is re excuted is to useSate
    setEnteredTilte(event.target.value); // need to save this to somewhere that ditach it from development cycle

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };
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
