import React, { Component } from 'react'
import TransactionsList from '../components/TransactionsList'
import Search from '../components/Search'

export default class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount(){
    this.getTransactionData()
      .then((data) => {
        return this.setState({
          transactions: data
        }
      )}
  )}


  getTransactionData(){
    return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then( res => res.json() )
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}
