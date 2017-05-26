import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  console.log('list:', props.transactions[0].category)
  // var display = {props.transactions.map(function(trans) {
  //    return (
  //      trans.category
  //    )
  //   }
  // )


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

      </tbody>
    </table>
  )
}

export default TransactionsList
