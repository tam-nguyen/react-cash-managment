import React, { Component } from 'react';
import AddTransaction from './components/AddTransaction'
import Report from './components/Report'


class App extends Component {
  constructor(){
    super();
    this.state={
        transactionInfo: []
    }
}

componentWillMount(){
  this.setState({transactionInfo:[
    {
      
    }
  ]})
}

handleAddTransaction(transaction){
  let transactions = this.state.transactionInfo;
  transactions.push(transaction);
  this.setState({transactionInfo: transactions})
}


  render() {

    return (
      <div className="App container">
        <h1>Cash Managment</h1>
        
        <AddTransaction addTransaction={this.handleAddTransaction.bind(this)}/>
        <Report transactionInfo={this.state.transactionInfo}/>

      </div>
    );
  }
}

export default App;
