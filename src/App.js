import React, { Component } from 'react';
import AddTransaction from './components/AddTransaction'
import Report from './components/Report'

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionInfo: [],
      total: 0
    }
  }

  handleAddTransaction(transaction) {
    let transactions = this.state.transactionInfo;
    transactions.push(transaction);
    let totalAdded = parseInt(transaction.transaction);
    let oldTotal = this.state.total;
    let newTotal = oldTotal + totalAdded;
    this.setState({ transactionInfo: transactions, total: newTotal })
  }

  render() {

    return (
      <div className="App container">
        <h1>Cash Managment</h1>
          <AddTransaction addTransaction={this.handleAddTransaction.bind(this)} />
          <Report transactionInfo={this.state.transactionInfo} total={this.state.total} />
      </div>
    );
  }
}

export default App;
