import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const search = RegExp(props.searchTerm, 'gi')
  const transactions = props.transactions.filter( transaction => {
    return !!transaction.description.match(search) || !!transaction.category.match(search)
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

        {transactions.map( (transaction, i) => (
          <Transaction key={i} transaction={transaction} />
        ))}

      </tbody>
    </table>
  )
}

export default TransactionsList
