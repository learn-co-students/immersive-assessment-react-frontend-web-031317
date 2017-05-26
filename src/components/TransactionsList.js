import React from 'react'
import Transaction from './Transaction'
import TransactionTable from './TransactionTable'

const TransactionsList = ( props ) => {

  const list = props.transactions.filter( t => t.description.toLowerCase().includes(props.searchTerm.toLowerCase()) || t.category.toLowerCase().includes(props.searchTerm.toLowerCase()))

  const filteredList = list.map( transaction => <Transaction key={transaction.id} transaction={transaction}/> )

  return (
    <TransactionTable filteredList={filteredList}/>
  )
}

export default TransactionsList
