import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpence = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    
    
    return (
    
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpence;