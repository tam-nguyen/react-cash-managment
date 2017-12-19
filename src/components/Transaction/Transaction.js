import React, { Component } from "react";
import "./Transaction.css";

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTransaction: {
        transaction: 0,
        merchant: '',
        date: this.formatDate()
      },
      disabled: false
    };
  }

  formatDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var date = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    //var value = month + "-" + day + "-" + year;
    var value = year + "-" + month + "-" + date;
    value.toString();
    return value;
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.refs.merchant.value === ""){
      this.refs.merchant.value = "Miscellaneous"
    }
    this.setState(
      {
        newTransaction: {
          transaction: this.refs.addtransaction.value,
          merchant: this.refs.merchant.value,
          date: this.refs.date.value
        },
        disabled: false
      },
      function() {
        this.props.addTransaction(this.state.newTransaction);
      }
    );
    this.refs.addtransaction.value = "";
    this.refs.merchant.value = "";
    this.refs.date.value = "2014-08-05";
    
  };

  valueMutation(e) {
    if (e.target.value !== "") {
      this.setState({ disabled: true });
    }
  }
  handleChange (e) {
    e.preventDefault();
    this.setState({newTransaction: {
      date: e.target.value
    }}) 
  }

 
  render() {
    
    return (
      <div className="Transaction">
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-item">
            <div className="left-col">
              <i className="fa fa-calendar" aria-hidden="true" />
            </div>
            <div className="right-col">
            <input
                type="date"
                className="input-box"
                id="date"
                ref="date"
                value={this.state.newTransaction.date}
                onChange={this.handleChange.bind(this)}
              />
              <hr className="hr" />
            </div>
          </div>
          <div className="clear" />
          <div className="input-item">
            <div className="left-col">
              <i className="fa fa-location-arrow" aria-hidden="true" />
            </div>
            <div className="right-col">
              <input
                type="text"
                className="input-box"
                id="merchant"
                ref="merchant"
                placeholder="Miscellaneous"
                
                
              />
              <hr className="hr" />
            </div>
          </div>
          <div className="clear" />
          <div className="input-item">
            <div className="left-col">
              <i className="fa fa-usd" aria-hidden="true" />
            </div>
            <div className="right-col">
              <input
                type="number"
                className="input-box"
                id="addtransaction"
                placeholder="Amount"
                ref="addtransaction"
                onChange={event => this.valueMutation(event)}
              />
              <hr className="hr" />
            </div>
          </div>
          <div className="clear" />

          <div className="center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.disabled}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTransaction;
