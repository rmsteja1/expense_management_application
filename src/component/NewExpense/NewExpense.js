import React, { useState } from "react";
import ExpenseForm from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  function startEditingHandler() {
    setIsEditing(true);
    console.log(isEditing);
  }
  function endEditingHandler(){
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={endEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
