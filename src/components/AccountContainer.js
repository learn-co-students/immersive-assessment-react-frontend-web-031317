import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import axios from 'axios';

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      transactions: []
    }
  }


  componentWillMount(){
    const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'
    axios.get(URL)
    .then(function (response) {
      console.log('this is a response', response.data);
      return response.data
    })
    this.setState({ transactions: response.data })
    // console.log('componentwillmount', this)
    // console.log('state', this.state)
  }

  handleChange(event) {
    // your code here
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={"...add code here..."} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
