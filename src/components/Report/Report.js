import React, { Component } from "react";
import './Report.css'

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
          <div key={i} className="report-item">
          <div className="button-function">
            <button
                className="fa fa-trash"
                onClick={this.deleleEle.bind(this, i)}
              >
                
              </button>
              <span>&nbsp;</span>
              <button
                className="fa fa-pencil"
                onClick={this.editEle.bind(this, i)}
              >
                
              </button>
</div>
            <div className="report-detail">
            <span className="transaction-date">{transactionEle.date}</span>
            <span className="transaction-merchant">{transactionEle.merchant}</span>
            <span className="transaction-transaction">${transactionEle.transaction}</span>
            <div>
              </div>
            

            </div>
          </div> 
         
        );
      });
    }

    return (
      <div className="Report">
        {this.props.transactionInfo.length > 0 && (
          <div>
          <h4>Overview</h4>
          <div>{transactionItems}</div>
          <div className="total"><b>Total</b>: ${this.props.total}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Report;
