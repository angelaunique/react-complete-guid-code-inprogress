import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react"; // useState allow to to define variable as state and change as value change
import ExpensesFilter from "./ExpenseFilter";
//function ExpenseItem(title,amount,date) {
//function ExpenseItem(props) {
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // console.log("ExpreseItem evaluated by react"); //will be called 4 times everytime expenseItem is called
  const clickHandler = () => {
    setTitle("Upldated!");
    console.log(title);
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
