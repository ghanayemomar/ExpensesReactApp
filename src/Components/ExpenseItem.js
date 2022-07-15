import './ExpenseItem.css';



function ExpenseItem (props) {
    // const expenseDate = new Date(2021, 2 , 28); 
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    return (
    <div className="expense-item">
   <div>{props.date.toISOString()}</div> 

   <div className="expense-item__description">
    <h2>{props.title}</h2>

    <div className="expense-item__price">${props.amount}</div>
   </div>
    </div>
    );
}
export default ExpenseItem;



//THIS IS OUR COMPONET!!!!!!!!! which we want to re-use and show it many times!!! but with diff Data!!! 
//out function recivied props from the app function and we for real it recivied many on props (diffrent data every time) and when we run the code it will be shown like stand-alone! 
//and that our main goal is to re-use our component with diffrent data