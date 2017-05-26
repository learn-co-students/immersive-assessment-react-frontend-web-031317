import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: [],
      filteredTransactions: []
    }
  }

  componentDidMount(){
    const account = this
    fetch('https://boiling-brook-94902.herokuapp.com/transactions', {
    	method: 'get'
    }).then(function(response) {
      return response.json()
    }).then(function(rj){
      account.setState({
        transactions: rj,
        filteredTransactions: rj
      })
    })
    .catch(function(err) {
    });
  }

  handleChange(event) {
    event.persist()
    this.setState( {searchTerm: event.target.value}, this.filterList)
  }


  filterList(){
    const account = this
    let updatedTransactions = this.state.transactions;
    let upTransactions = this.state.transactions;
    updatedTransactions = updatedTransactions.filter(function(transaction){
      return transaction.description.toLowerCase().search(
        account.state.searchTerm.toLowerCase()) !== -1
    })
    upTransactions = upTransactions.filter(function(transaction){
      return transaction.category.toLowerCase().search(
        account.state.searchTerm.toLowerCase()) !== -1
    })
    this.setState({filteredTransactions: updatedTransactions.concat(upTransactions)});

  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)}/>
        <TransactionsList transactions={this.state.filteredTransactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
