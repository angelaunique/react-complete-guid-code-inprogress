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
    // date is a string, need to convert date obj to string
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // expense is control component which control ExpensesFilter component
  //dynamic expression, transform expense obj  js elements in {[]}
  // use map to extract title, amount,date from props.items array, transform array to an array full of JSX item
  // now mean we can change the array and the changes will be rendered
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
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
