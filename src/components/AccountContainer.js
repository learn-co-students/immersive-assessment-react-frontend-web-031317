import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import axios from 'axios';

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
    axios.get(URL)
      .then((res) => this.setState({ transactions: res.data })
    )
  }

  handleChange(term) {
    this.setState({
      searchTerm: term
    })
  }


  render() {
    console.log('accountcontainer', this.state.searchTerm)

    const displayedTransactions = this.state.transactions.filter( trans => trans.description.includes(this.state.searchTerm))

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={displayedTransactions} />
      </div>
    )
  }
}

export default AccountContainer
