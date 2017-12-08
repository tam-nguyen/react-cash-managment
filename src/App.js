import React, { Component } from "react";
import AddTransaction from "./components/Transaction/Transaction";
import Report from "./components/Report";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionInfo: [],
      total: 0
    };
  }

  handleAddTransaction = transaction => {

    let transactions = this.state.transactionInfo.slice();
    transactions.push(transaction);
    let totalAdded = parseInt(transaction.transaction, 0);
    let oldTotal = this.state.total;
    let newTotal = oldTotal + totalAdded;
    this.setState({ transactionInfo: transactions, total: newTotal });
    
  };

  handlerDelete(index) {

    let transactions = this.state.transactionInfo.slice();
    let newTotal = parseInt(transactions[index].transaction, 0);
    console.log(newTotal);
    let currentTotal = this.state.total;
    let updatedTotal = currentTotal - newTotal;
    transactions.splice(index, 1);
    this.setState({ transactionInfo: transactions, total: updatedTotal });

  }
  render() {
    //console.log(this.state.total);

    return (
      <div className="App container">
        <h1>Cash Managment</h1>
        <AddTransaction addTransaction={this.handleAddTransaction} />
        <Report
          transactionInfo={this.state.transactionInfo}
          total={this.state.total}
          onDelete={this.handlerDelete.bind(this)}
        />
      </div>
    );
  }
}

export default App;
