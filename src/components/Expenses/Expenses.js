import React, { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
 
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpnses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpnses} />
        <ExpensesList items = {filteredExpnses}/>
      </Card>
    </div>
  );
};
 
export default Expenses;