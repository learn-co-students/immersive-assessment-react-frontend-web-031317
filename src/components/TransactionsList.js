import React from 'react'
import Transaction from './Transaction'
import AccountContainer from './AccountContainer'

const TransactionsList = (props) => {
  const amounts = props.transactions.map( (transaction, i) => <ul key={i}>{transaction.amount}</ul>)
  const categories = props.transactions.map( (transaction, i) => <ul key={i}>{transaction.category}</ul>)
  const descriptions = props.transactions.map( (transaction, i) => <ul key={i}>{transaction.description}</ul>)
  const postTimes = props.transactions.map( (transaction, i) => <ul key={i}>{transaction.posted_at}</ul>)


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

        <Transaction postTimes={postTimes} descriptions={descriptions} categories={categories} amounts={amounts} />

      </tbody>
    </table>
  )
}

export default TransactionsList
