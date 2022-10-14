// import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
// import Card from '../Card';
// import './Expenses.css';
// import ExpensesFilter from './ExpensesFilter';
// import './ExpensesFilter.css'

//   const Expenses = (props)=>{
//     const [filteredYear, setFilteredYear] = useState('2020');

//     const filterChangeHandler = selectedYear => {
//       setFilteredYear(selectedYear);
//     }
    
//     return (
//       <div>
//       <Card className="expenses">
//       <ExpensesFilter selected = {filteredYear} onChange={filterChangeHandler} />

//       {props.items.map((expense , index) => (
//       <ExpenseItem 
//       key = {expense.id} 
//       title={expense.title} 
//       amount={expense.amount} 
//       date={expense.date} 
//       />
//       ))}

      
//     </Card>
//     </div>
//   );
// }


// export default Expenses;

import React, { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
 
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
        <ExpensesList items = {filteredExpnses}/>
      </Card>
    </div>
  );
};
 
export default Expenses;