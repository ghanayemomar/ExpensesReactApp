import React from 'react';
import './ExpenceForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
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
            <input type="text"/>
        </div>

        {/* // */}
        <div className='new-expense__controls'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
    </div>
    {/* // */}
    <div className="new-expense__actions"/>
        <button type="submit">Add Expense</button>
    </form>
);
};
export default ExpenseForm;