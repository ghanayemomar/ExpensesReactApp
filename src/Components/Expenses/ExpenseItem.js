import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const  ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/> 
        {/* In this way we call the component and make it recive data to view it! */}
    
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;

//THIS IS OUR COMPONET!!!!!!!!! which we want to re-use and show it many times!!! but with diff Data!!!
//out function recivied props from the app function and we for real it recivied many on props (diffrent data every time) and when we run the code it will be shown like stand-alone!
//and that our main goal is to re-use our component with diffrent data
