import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import Modal from "react-bootstrap/lib/Modal";
import ControlLabel from "react-bootstrap/lib/ControlLabel";


class BackDrop extends Component {
  state={
    updatedDate: this.props.transactioninfo.date,
    updatedMerchant: this.props.transactioninfo.merchant,
    updatedTransaction: this.props.transactioninfo.transaction
  }
  onSave(){
    
    this.props.onClose(this);
  }

  updatingDate = (e) =>{
    let date = this.state.updatedDate;
    date = e.target.value;
    this.setState({updatedDate : date})
  }
  updatingMerchant = (e) =>{
    let merchant = this.state.updatedMerchant;
    merchant = e.target.value;
    this.setState({updatedMerchant : merchant})
  }
  updatingTransaction = (e) =>{
    let transaction = this.state.updatedTransaction;
    transaction = e.target.value;
    this.setState({updatedTransaction : transaction})
  }
  render() {

    return (
      <div>
          <Modal.Header>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <table className="table table-bordered">
          <tbody>
          <tr>
            <td scope="row" width="25%">
              <input
                type="date"
                className="form-control"
                id="editDate"
                ref="editDate"
                value={this.state.updatedDate}
                onChange={(event) => this.updatingDate(event)}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                id="editMerchant"
                ref="editMerchant"
                value={this.state.updatedMerchant}
                onChange={(event) => this.updatingMerchant(event)}
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                id="editTransaction"
                ref="editTransaction"
                value={this.state.updatedTransaction}
                onChange={(event) => this.updatingTransaction(event)}
              />
            </td>
          </tr>
          </tbody>
        </table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onSave.bind(this)}>Save</Button>
          </Modal.Footer>
         
      </div>
    );
  }
}

export default BackDrop;
