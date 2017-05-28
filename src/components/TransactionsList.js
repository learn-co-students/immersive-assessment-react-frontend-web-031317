import React from 'react'

import OneRow from './OneRow'

const TransactionsList = (props) => {
  console.log('TransactionsList props: ', props);
  //console.log('TransactionsList props.transactions: ', props.transactions)

  //let transactions = props.transactions //array

  //mapping over filteredResults instead of transactions (filteredResults are our filtered transactions)
  let allRows = props.filteredResults.map(transaction => {
    return <OneRow
      transaction={transaction}
      //instead passing entire transaction object as a prop

      // postedAt={transaction.posted_at}
      // description={transaction.description}
      // category={transaction.category}
      // amount={transaction.amount}
    />
  })

//need to map over each object and return elements in row cells
//but i'm an idiot and couldn't figure it out
//below method is dumb and ugly and not DRY, and not correct :(


  // let transactionPostedAt = props.transactions.map(transaction => {
  //   //console.log(transaction);
  //   //console.log('transaction.description: ', transaction.description);
  //   return (<div>
  //     {transaction.posted_at}
  //   </div>)
  // })
  //
  // let transactionDescription = props.transactions.map(transaction => {
  //   console.log(transaction);
  //   console.log('transaction.description: ', transaction.description);
  //   return (<div>
  //     {transaction.description}
  //   </div>)
  // })
  //
  // let transactionCategory = props.transactions.map(transaction => {
  //   //console.log(transaction);
  //   return (<div>
  //     {transaction.category}
  //   </div>)
  // })
  //
  // let transactionAmount = props.transactions.map(transaction => {
  //   //console.log(transaction);
  //   return (<div>
  //     {transaction.amount}
  //   </div>)
  // })
  //
  // let EachPostAt = transactionPostedAt.map(eachPost => {
  //   return (<div>
  //     {eachPost}
  //   </div>)
  // })


//////adding filter:::::::::


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {/* {"... your code here..."} */}
        {allRows}

      </tbody>
    </table>

  )
}

export default TransactionsList
