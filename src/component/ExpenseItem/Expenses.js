import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import CardFormat from "../UI/CardFormat";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  //const expenses = props.expensesArray;
  const [yearValue, setYearValue] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYearValue(selectedYear);
  }; 
  return (
    <CardFormat className="expenses">
      <ExpensesFilter
        selected={yearValue}
        onYearSelection={filterChangeHandler}
      />
      {props.expensesArray.map((eachExpense) => (
        <ExpenseItem title={eachExpense.title} amount={eachExpense.amount} date={eachExpense.date} />
      ))}
    </CardFormat>
  );
}
export default Expense;
