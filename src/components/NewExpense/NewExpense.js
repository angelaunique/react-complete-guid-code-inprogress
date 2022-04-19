import { checkPropTypes } from "prop-types";
import react from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// props received from app.js that need to set up
const NewExpense = (props) => {
  //this function defined in NewExpense conponent will excute in a different component ,inside of ExpenseItem
  // we can excute it bc we're passing a pointer to the function to ExpenseForm
  //This is the way child comunicate to parent
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // pull out all the key value pairs and add them to this new object
      id: Math.random().toString(), // add a new key, id set to math random(randomly generate)
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData); //onAddExpense is the function name, take parameter (expenseData) from app.js
    // above pros forward enriched expseData to app.js
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;

//this file is meant for user input, reutrn a form for user input
// important, pass a pointer as a function:  <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
//data come back from ExpenseForm.js, then saved to saveExpenseDataHandler's para :enteredExpenseData
// create event props and pass in function as value, this allow pass value from parent component to child component that call that funtion, thus
//when child call that function, we can pass data to that function as a parameter,and that's how we can communicate up from child to parent
