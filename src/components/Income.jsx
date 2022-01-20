import React from 'react';

const Income = () => {
  return <div>

<h1 className='income-title'>Income</h1>
      <div className="ui form">
  <div className="field">
      <input type="text" className='exp1'  placeholder='Income Title'/>
      <select name="" id="" className='exp1'>
        <option value="">Salary</option>
        <option value="">Recollected Debts</option>
        <option value="">Donation/Gift</option>
        <option value="">Other Income</option>
      </select>
      <input type="number" placeholder='$$$$' className='exp1'/>
      <input type="text" placeholder='Remarks' className='exp1'/>
        <button className='ui button green centb'>Submit</button>      
  </div>
</div>


  </div>;
};

export default Income;
