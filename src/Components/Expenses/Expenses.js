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
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />

      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />

      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />

      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
    </div>
   
  );
}

export default Expenses;

//here we pass from the parent component which is Expenses to te child Component which is ExpenceItem!
