import { checkPropTypes } from "prop-types";
import react, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// props received from app.js that need to set up
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // pull out all the key value pairs and add them to this new object
      id: Math.random().toString(), // add a new key, id set to math random(randomly generate)
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  // setIsEditing(true); is set to true when buttion is clicked
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // Show buttion when is not adding
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;

//Add new props (onCancel) inside of  {<isEditing ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  on />}
// pass to expenseForm component
