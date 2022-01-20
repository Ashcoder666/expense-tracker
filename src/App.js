
import './App.css';
import React from 'react';
import {useState} from 'react'
import Expense from './components/Expense'
import Modal from 'react-modal';
import Income from './components/Income'
import './components/componentStyle.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
   
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function App() {
  

  const [expenseModal, setExpenseModal] = useState(false);
  const [incomeModal, setIncomeModal] = useState(false);

  function openModal() {
    setExpenseModal(true);
  }

  

  function closeExpenseModal() {
    setExpenseModal(false);
  }
  function closeIncomeModal() {
    setIncomeModal(false);
  }

  return (
    <div className="App" >
        <div className='app-body'>
            <h1 className='app-title'>Expense Tracker</h1>
            <div className='app-buttons'>
              <button className='ui button red ab' onClick={openModal}>expense</button>
              <button className='ui button green ab' onClick={()=>{setIncomeModal(true)}}>income</button>

              <Modal
        isOpen={expenseModal}
        onRequestClose={closeExpenseModal}
          style={customStyles}
        contentLabel="Expense Modal"
        
     > 
 <Expense />
      </Modal>

      <Modal
        isOpen={incomeModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeIncomeModal}
        style={customStyles}
        contentLabel="income Modal"
        ariaHideApp={false}
     > 
 <Income />
      </Modal>



            </div>
            <div className='expense-log'>

            </div>


        </div>
    </div>
  );
}

export default App;
