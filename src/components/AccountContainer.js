import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then( res => res.json() )
      .then( transactions => this.setState({
        transactions: transactions
      })
    )
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  filter() {
    return this.state.transactions
      .filter( transaction => 
        transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
      )
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.filter()} />
      </div>
    )
  }
}

export default AccountContainer
