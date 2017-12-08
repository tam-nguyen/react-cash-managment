import React, { Component } from "react";
import styles from "./Transaction.css";

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTransaction: {}
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
        }
      },
      function() {
        this.props.addTransaction(this.state.newTransaction);
      }
    );
    this.refs.addtransaction.value = "";
    this.refs.merchant.value = "";
    this.refs.date.value = "";
  };

  render() {
    let classes = ['bg-inverse','text-white'].join(' ');
    return (
      <div className={styles.Transaction}>
        <form onSubmit={this.handleSubmit}>
          <table className="table table-bordered">
          <thead className={classes}>
              <tr>
                <th  width="25%">Date</th>
                <th >Merchant</th>
                <th  width="25%">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" width="25%">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    ref="date"
                  />
                </th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="merchant"
                    ref="merchant"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="addtransaction"
                    ref="addtransaction"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn btn-default">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransaction;