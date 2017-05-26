import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  var transactions = props.transactions
  var searchTerm = props.searchTerm.toLowerCase()
  var filteredTransactions = transactions.filter(function(transaction){
    let description = transaction.description.toLowerCase()
    let category = transaction.category.toLowerCase()
    let search1 = description.search(searchTerm)
    let search2 = category.search(searchTerm)
    if(search1 != -1 || search2 != -1){
      return transaction
    }
  })
  var displayTransactions = filteredTransactions.map(function(transaction){
    return <Transaction transaction={transaction}/>
  })

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
        { displayTransactions }
      </tbody>
    </table>
  )
}

export default TransactionsList
