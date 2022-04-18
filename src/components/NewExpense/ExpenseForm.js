import React from "react";

const ExpenseForm = () => {
  //document.getElementById('').addEventListener('click',(event)=>{}) //vanila javascript return event object from click
  //same as above way to get event, below handler also get event, just add event parameter inside of titleChangeHandler = (event)
  const titleChangeHandler = (event) => {
    //console.log(event); // will get a lot of date for event, there is a field "input " which will simply
    //points at thte DOM element for which the events occured
    // the value property holds the current value of this input
    console.log(event.target.value); // This is the way to get the value!
  }; // get event when event occurs at the point of time this event occurs

  return (
    <form>
      <div className="  new-expense_controls">
        <div className="new-expense_control ">
          <label> Title </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense_control ">
          <label> Amount </label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense_control ">
          <label> Date </label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
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
