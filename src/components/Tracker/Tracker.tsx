
import React, { useContext, useState } from 'react'
import {createTransaction} from '../Context/contextAPI'
import "./Tracker.css"
function Tracker() {
const [des,setDesc]=useState("")
const[Amount,setAmount]=useState("")
  const {transaction,AddTransaction}=useContext(createTransaction)
  function handleSubmit () {
    console.log(des)
    AddTransaction({
      Description:des,
      Amount:Number(Amount)
    })  
    
  }
  function getIncome(){
    let income=0;
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].Amount>0){
        income+=transaction[i].Amount
      }
      
    }
    
    return income;
  }
  function getExpense(){
    let expense=0;
    for (let i = 0; i < transaction.length; i++) {
      if (transaction[i].Amount<0){
        expense+=transaction[i].Amount
      }
      
    }
    
    return expense;
  }

  return (
    <div className='App-container'>
      <div className='heading'>
  <h1>MY BUDGET PLANNER</h1>
      </div>
<div className='Budget-container'>
<div className='Budget' style={{backgroundColor:"#e0dddd"}}>
  <div className="amount">

   <p>Budget</p>
  <span>${getIncome() + getExpense()}</span>
  </div>
</div>
<div className='Budget'  style={{backgroundColor:"#add8bb"}}> 
<div className="amount">

<p>Income</p><span>
  ${getIncome()}</span></div>
</div>
<div className='Budget' style={{backgroundColor:"rgb(163 202 222 / 84%)"}} >
<div className='amount'>

  <p>Expenses</p>
  <span>${getExpense()}</span>
</div>
  </div>


</div>
<div className='expense-history'>
  <strong>
    Transaction History
    </strong>
<ul>
  {transaction.map((item:any)=>{
    return <li>
   <span>{item.Description}</span>
   <span>{item.Amount}</span>

    </li>
  })}
</ul>
</div>
<div className='Add-expense'>
  <strong>Add Expenses</strong>
<form   >
<label ><strong>
  Description
  </strong>
  </label><br />
<input className='input'  type="text" onChange={(e)=> setDesc(e.target.value)}  />
<br />

<label ><strong>
  Amount
  </strong>
  </label>  <br />
<input className='input' type="number"  onChange={(e)=>{ setAmount(e.target.value)}} />

<input id="submit" className='btn' type="button" value="Submit" onClick={handleSubmit}  />
</form>
</div>



    </div>
  )
}

export default Tracker;