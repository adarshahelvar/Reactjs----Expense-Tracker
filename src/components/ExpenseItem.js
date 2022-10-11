import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
  const clickHandler =() =>{
      console.log('clicked Change Title !!!')
    }
  const clickDelete =() =>{
    console.log('clicked Delete!!!')
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickDelete}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;