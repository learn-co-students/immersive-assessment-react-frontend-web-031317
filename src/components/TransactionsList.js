import React from 'react'
import Transaction from './Transaction'
const TransactionsList = (props) => {

  const filteredList = props.transactions.filter( transaction =>
    transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase() ) ||
    transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase() )
  )


  return (
    <div>
      { props.searchTerm.length > 0 && <div><h3>Showing Results for: {props.searchTerm}</h3><i className="circular search link icon"></i></div> }
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

          {filteredList.map( transaction => <Transaction key={transaction.id} transaction={transaction}/>)}

        </tbody>
      </table>
    </div>
  )
}

export default TransactionsList
