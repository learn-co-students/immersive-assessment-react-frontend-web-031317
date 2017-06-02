import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Transaction from './Transaction'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }


  getData() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then( data =>
      this.setState({
        transactions: data
      })
    )
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  componentDidMount() {
    this.getData()
  }



  render() {
    const filteredTransactions = this.state.transactions.filter((transaction) =>
      transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())

  )

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)}/>
        <TransactionsList transactions={filteredTransactions}  />
      </div>
    )
  }
}

export default AccountContainer
