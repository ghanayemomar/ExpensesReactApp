import './ExpenseItem.css';



function ExpenseItem (props) {
    
    const day = props.date.toLocaleString('en-US' , {day: '2-digit'});
    const month = props.date.toLocaleString('en-US' , {month: 'long'});
    const year = props.date.getFullYear();

    return (
    <div className="expense-item">

   <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>


   </div> 

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