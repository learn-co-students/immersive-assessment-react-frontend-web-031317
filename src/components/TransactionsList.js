import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const transactions = props.transactions.map((transaction) => {
    return <Transaction key={transaction.id} value={transaction}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
            {'transaction.posted_at'}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
            {'transaction.description'}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
            {'transaction.category'}
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
            {'transaction.amount'}
          </th>
        </tr>

        {transactions}

      </tbody>
    </table>
  )
}

export default TransactionsList
