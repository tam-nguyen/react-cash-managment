import React, { Component } from 'react';
import classes from './Transaction.css'
class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTransaction:{}
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.setState({newTransaction:{
            transaction: this.refs.addtransaction.value,
            merchant: this.refs.merchant.value,
            date: this.refs.date.value
        }}, function(){
            this.props.addTransaction(this.state.newTransaction);
        })
    }
    
    render() {
        return (
            <div className="Transaction">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group row">
                  <label htmlFor="addtransaction" className="col-sm-4 col-form-label">Add Transaction</label>
                  <div className="col-sm-8">
                  <input type="number" className="form-control" id="addtransaction" ref="addtransaction"/>
                  </div>
                 
                </div>
                <div className="form-group row">
                  <label htmlFor="merchant" className="col-sm-4 col-form-label">Merchant</label>
                  <div className="col-sm-8">
                  <input type="text" className="form-control" id="merchant" ref="merchant"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="date" className="col-sm-4 col-form-label">Date</label>
                  <div className="col-sm-8">
                  <input type="date" className="form-control" id="date" ref="date"/>
                  </div>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
        );
    }
}

export default AddTransaction;