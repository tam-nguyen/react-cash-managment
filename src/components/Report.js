import React, { Component } from "react";

class Report extends Component {
  deleleEle(i) {
    this.props.onDelete(i);
  }

  editEle(i){
    
    this.props.onEdit(i);
  }

  render() {
    let transactionItems;
    if (this.props.transactionInfo) {
      transactionItems = this.props.transactionInfo.map((transactionEle, i) => {
        return (
          <tr key={i}>
            <td>{i}</td>
            <td>{transactionEle.date}</td>
            <td>{transactionEle.merchant}</td>
            <td>{transactionEle.transaction}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={this.deleleEle.bind(this, i)}
              >
                Delete
              </button>
              <span>&nbsp;</span>
              <button
                className="btn btn-info"
                onClick={this.editEle.bind(this, i)}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      });
    }

    return (
      <div className="Report">
        {this.props.transactionInfo.length > 0 && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Merchant</th>
                  <th>Amount</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>{transactionItems}</tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th />
                  <th />
                  <th>{this.props.total}</th>
                  <th />
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Report;
