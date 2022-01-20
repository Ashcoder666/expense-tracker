import React from 'react';

const Expense = () => {
  return <div className='expense-body'>
      <h1 className='expense-title'>Expense</h1>
      <div className="ui form">
  <div className="field">
      <input type="text" className='exp1'  placeholder='Expense Title'/>
      <select name="" id="" className='exp1'>
        <option value="">Food</option>
        <option value="">Entertainment</option>
        <option value="">Rent or Bills</option>
        <option value="">Other Expense</option>
      </select>
      <input type="number" placeholder='$$$$' className='exp1'/>
      <input type="text" placeholder='Remarks' className='exp1'/>
        <button className='ui button red centb'>Submit</button>      
  </div>
</div>


    

  </div>;
};

export default Expense;
