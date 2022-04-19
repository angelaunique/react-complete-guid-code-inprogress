import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
//function Expenses(props) {
//every item reach it's own states, this func called 4 times ,every call, a new seperate state is created
// if change title on one of it, others won't change, on per component basis

// put <ExpensesFilter /> inside of Card but before   <ExpenseItem
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filter returned a new array! original array is not touched
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p> No expenses found. </p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
// expense is used to extract tile:    {props.items.map(expense => <ExpenseItem title = {expense.title}/>)}

//whenever add a new item, all other items are updated, could lead to bugs; bc all items inside of arr are
//same to the array, solution: add key to component to help react to ideatify individual items
// should always add a key when mapping out lists of items
//5-66 rewatch the flash part

// filter items according selected year by create filteredExpenses function and change props.item to filteredExpenses

//conditonal content: rendering different item under different conditions

// { filteredExpenses.length === 0 && <p> No expenses found. </p>; }
// above js will return the part after the and operator as the overall check result if the first condition is met
// which allow to write shoter expressions

/*
method1 and method2 are equivalent to {expenseContent} in line 40
method1 
Below conditional expression is changed to method2 expression
 {filteredExpenses.length === 0 ? (
          <p> No expenses found. </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
*/

/*
{filteredExpenses.length === 0 && <p> No expenses found. </p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}

*/
