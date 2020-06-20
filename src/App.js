import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider >
   
     <div className="container" style={{width:"100%"}}>
     <Header/>
     <br />
       <Balance />
       <IncomeExpense/>
       <AddTransaction/>
       <TransactionList/>
     </div>
    </GlobalProvider>
  );
}

export default App;
