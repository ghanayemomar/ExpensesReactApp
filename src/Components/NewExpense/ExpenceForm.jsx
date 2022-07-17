import React,{ useState } from 'react';

import './ExpenceForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('  ');
    const [enteredAmount,setEnteredAmount ] = useState('  ');
    const [enteredDate, setEnteredDate] = useState('  ');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };
    
    return (    
    <form>
    <div className='new-expense__controls'> 
        
        {/* // */}
        <div className='new-expense__controls'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
        </div>

        {/* // */}
        <div className='new-expense__controls'>
            <label>Amount</label>
            <input type="text" onChange={amountChangeHandler}/>
        </div>

        {/* // */}
        <div className='new-expense__controls'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
    </div>
    {/* // */}
    <div className="new-expense__actions"/>
        <button type="submit">Add Expense</button>
    </form>
);
};
export default ExpenseForm;