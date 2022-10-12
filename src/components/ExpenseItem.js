import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);

  const clickHandler =() =>{
    setTitle('Updated Title')
    console.log(title)
    }

    const changeExpense =() =>{
      setAmount('100')
      console.log('Amount changed')
      }  

  const clickDelete =() =>{
    console.log('clicked Delete!!!')
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDelete}>Delete</button>
      <button onClick={changeExpense}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;