import React, { Component } from "react";
import AddTransaction from "./components/Transaction/Transaction";
import Report from "./components/Report";
import BackDrop from './components/Modals/BackDrop'
import Modal from "react-bootstrap/lib/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionInfo: [],
      total: 0,
      showEdit: false,
      transactionInfoEditMode: []
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
    let currentTotal = this.state.total;
    let updatedTotal = currentTotal - newTotal;
    transactions.splice(index, 1);
    this.setState({ transactionInfo: transactions, total: updatedTotal });

  }

  handlerEdit(i){
    let transaction = this.state.transactionInfo[i];
    this.setState({showEdit: true, transactionInfoEditMode: transaction})
  }
  close(e){
    let transaction = e
    console.log(transaction)
    console.log(this.transactionInfoEditMode) 
    this.setState({showEdit:false})
  }
  render() {
    return (
      <div className="App container">
        <h1></h1>
        <AddTransaction addTransaction={this.handleAddTransaction} />
        <Report
          transactionInfo={this.state.transactionInfo}
          total={this.state.total}
          onDelete={this.handlerDelete.bind(this)}
          onEdit={this.handlerEdit.bind(this)}
        />
        <Modal show={this.state.showEdit} onHide={this.close.bind(this)} >
            <BackDrop onClose={this.close.bind(this)} transactioninfo={this.state.transactionInfoEditMode}/>
        </Modal>
      </div>
    );
  }
}

export default App;
