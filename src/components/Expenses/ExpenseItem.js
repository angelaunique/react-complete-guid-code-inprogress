import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react"; // useState allow to to define variable as state and change as value change
//function ExpenseItem(title,amount,date) {
//function ExpenseItem(props) {
const ExpenseItem = (props) => {
  //let title = props.title;
  //why const while still change? not use = ,  but use the function, the const value is managed by react,
  // never assign new value = title, how to we get latest value of title
  // whenever component return""" excute, thus the new title is fectched from react
  // when re extute, bc state change, react will not reinitialize the state, will detect react initialzed in the past
  //and would just grap the latest state.
  const [title, setTitle] = useState(props.title); // must be called directly in component functions, not outside nor inside nested functions clickHandler()
  //useState return a new title and an updated function(the function that updated the value),always return arr with 2 values,
  // title is current value and setTitle is the function that updated it, react keep track of useState when called the first time

  console.log("ExpreseItem evaluated by react"); //will be called 4 times everytime expenseItem is called
  const clickHandler = () => {
    setTitle("Upldated!");
    console.log(title); // change item, then reevaluate in return, by default,regular varialbes like let tile = are not triggering reevaluation, thus no changed show ,bc the overall component function doesnt excute again just bc some variable changes
    //title = "Updated!@@"; // to tell the react it should exculte, should import named import from react library
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
};
export default ExpenseItem;
//component are functions that return html code； 注意！ comment不能放第一行！！
// only one root element in one statement : return <h2>Expense Item!</h2>;
//Sol: wrap into different pair of divs
// inside the root <div> there can be multiple
