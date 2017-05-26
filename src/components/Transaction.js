import React from 'react'

const Transaction = (props) => { //an array of objects
  console.log(props.transactions)
  // let transDate = props.transactions.map((trans) => {return trans.posted_at})
  // let transDescription = props.transactions.map((trans) => {return trans.description})
  // let transCategory = props.transactions.map((trans) => {return trans.category})
  // let transAmount = props.transactions.map((trans) => {return trans.amount})

  const EACHROW = props.transactions.map((transObj, index) => {
    return(
      <tr key={index}>
        <td>{ transObj.posted_at }</td>
        <td>{ transObj.description }</td>
        <td>{ transObj.category }</td>
        <td>{ transObj.amount }</td>
      </tr>
    )
  })

  return (
    <div>
      { EACHROW }
    </div>

  )
}

export default Transaction
