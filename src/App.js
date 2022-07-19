import React , {useState} from 'react';
import NewExpence from './Components/NewExpense/NewExpense';
import Expenses from './Components/Expenses/Expenses'


  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const App = () => {

    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  };

  return (
   <div>
   <NewExpence onAddExpense={addExpenseHandler} />
    <Expenses expenses={expenses}/>
   </div>
   
  );
}

export default App;

// We defined an array that contain an objects thats will be the data we have 
//this is our cistom function 
//here we use out component many time but with diff data!! 