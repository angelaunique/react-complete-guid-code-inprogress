import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react"; // useState allow to to define variable as state and change as value change
import ExpensesFilter from "./ExpenseFilter";
//function ExpenseItem(title,amount,date) {
//function ExpenseItem(props) {
const ExpenseItem = (props) => {
  //change back to stateless compnonent, or presentational or dumb component bc it doesn't have internal state, just to present data
  //react have more dumb component than samrt component
  //dumb not necessarliy worse, smart not neccessary better, bc most component focus on output sth, on having jsx code
  // only a couple component manage states(spreadout through pros)
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
//component are functions that return html code； 注意！ comment不能放第一行！！
// only one root element in one statement : return <h2>Expense Item!</h2>;
//Sol: wrap into different pair of divs
