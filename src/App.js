import React, { Component } from "react";
import AddTransaction from "./components/Transaction/Transaction";
import Report from "./components/Report/Report";
import BackDrop from './components/Modals/BackDrop'
import Modal from "react-bootstrap/lib/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactionInfo: [],
      total: 0,
      showEdit: false,
      transactionInfoEditMode: [],
      indexTransactionItem: null
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
    this.setState({showEdit: true, transactionInfoEditMode: transaction, indexTransactionItem: i})
  }
  close(e, index){
    let transaction = this.state.transactionInfo.slice();
    let currentTotal = this.state.total;
    
    if(transaction[index].transaction < e.state.updatedTransaction) {
      let temp = e.state.updatedTransaction - transaction[index].transaction;
      currentTotal = currentTotal + temp;
    }else{
      let temp = transaction[index].transaction - e.state.updatedTransaction;
      currentTotal = currentTotal - temp;
    }
    
    transaction[index].transaction = e.state.updatedTransaction;
    transaction[index].date = e.state.updatedDate;
    transaction[index].merchant = e.state.updatedMerchant;

    
    
    this.setState({ 
      showEdit: false, 
      transactionInfo: transaction,
      total: currentTotal
    });
  }
  render() {
    return (
      <div className="App container">
        
        <AddTransaction addTransaction={this.handleAddTransaction} />
        <Report
          transactionInfo={this.state.transactionInfo}
          total={this.state.total}
          onDelete={this.handlerDelete.bind(this)}
          onEdit={this.handlerEdit.bind(this)}
        />
        <Modal 
          show={this.state.showEdit} 
          onHide={this.close.bind(this)} >
            <BackDrop 
              onClose={this.close.bind(this)} 
              transactioninfo={this.state.transactionInfoEditMode}
              index = {this.state.indexTransactionItem}
              />
        </Modal>
      </div>
    );
  }
}

export default App;
