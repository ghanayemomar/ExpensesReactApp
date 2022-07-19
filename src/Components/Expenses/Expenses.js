import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css'

const Expenses = (props) =>{
  const [filteredYear, setFilteredYear ] = useState('2020')

  const filterChangeHandler= (selectedYear) => {
    setFilteredYear(selectedYear)
  };
  return (
    
      
    <div>
    <Card className='expenses'>
    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler} />
    
    {props.expenses.map( (expense) => 
    <ExpenseItem 
      title={expense.title}
      amount={expense.amount}
      date={expense.date} /> )}
    </Card>
    </div>
   
  );
}

export default Expenses;

//here we pass from the parent component which is Expenses to te child Component which is ExpenceItem!
