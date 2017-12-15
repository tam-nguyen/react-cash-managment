import React, { Component } from "react";
import './Transaction.css';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTransaction: {},
      disabled: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

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
    this.refs.date.value = "";
  };

  valueMutation(e) {
    if (e.target.value !== "") {
      this.setState({ disabled: true });
    }
  }
  render() {

    return (
      <div className="Transaction">
      <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>

          <div className="input-item">
            <div className="left-col">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            </div>
            <div className="right-col">
              <input
                      type="date"
                      className="input-box"
                      id="date"
                      ref="date"
                    />
                     <hr className="hr"/>
            </div>
          </div>
          <div className="clear"></div>
          <div className="input-item">
            <div className="left-col">
            <i class="fa fa-location-arrow" aria-hidden="true"></i>
            </div>
            <div className="right-col">
            <input
                    type="text"
                    className="input-box"
                    id="merchant"
                    ref="merchant"
                    placeholder="Merchandise"
                    required
                  />
                     <hr className="hr"/>
            </div>
          </div>
          <div className="clear"></div>
          <div className="input-item">
            <div className="left-col">
            <i class="fa fa-usd" aria-hidden="true"></i>
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
                    <hr className="hr"/>
            </div>
          </div>
          <div className="clear"></div>



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
