import React, { useState } from "react";
import "./Expenses.css";
import CardFormat from "../UI/CardFormat";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setYearValue] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYearValue(selectedYear);
  };
  const filteredExpenses = props.expensesArray.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <CardFormat className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearSelection={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </CardFormat>
  );
}
export default Expense;
