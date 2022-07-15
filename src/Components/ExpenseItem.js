import './ExpenseItem.css';


function ExpenseItem () {
    const expenseDate = new Date(2021, 2 , 28); 
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
    <div className="expense-item">
   <div>{expenseDate.toISOString()}</div> 

   <div className="expense-item__description">
    <h2>{expenseTitle}</h2>

    <div className="expense-item__price">${expenseAmount}</div>
   </div>
    </div>
    );
}
export default ExpenseItem;


// in {}: <- we can type an simple JS code 
// new Date: is an JS build-in function which takes Date's.
// we cannot assign date alone we have to add an ISOString(An JS built in function) to assign date to String