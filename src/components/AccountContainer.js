import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: 'TEST',
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Book",
          amount: 1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Coffee",
          amount: 365
        }
      ]
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => {
      return response.json()
    }).then(json => {
      console.log('parsed json', json)
      const transactionHolder = json.map(function(transaction){
        return (
          {
            id: transaction.id,
            posted_at: transaction.posted_at,
            description: transaction.description,
            category: transaction.category,
            amount: transaction.amount
          }
        )


      }, this)

      this.setState({
        searchTerm: this.state.searchTerm,
        transactions: transactionHolder
      })
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })


  }

  handleChange(event) {
    const curses = ["doohickey", "darn", "jerk", "pumpernickel", "shit", "damn", "shoot", "butt", "buttface", "crap", "poop", "fuck", "lake titicaca", "ass"]
    var theyCursed = false

    curses.forEach(function(curse){
      if(event.target.value.toLowerCase() === curse){
        theyCursed = true
      }
    })

    if(theyCursed){
      alert("GET THAT FOUL LANGUAGE OUT OF HERE")
    }else{
      this.setState({
        searchTerm: event.target.value,
        transactions: this.state.transactions
      })
    }

    // console.log(this.state.searchTerm)
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} value={this.state.searchTerm}/>
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
