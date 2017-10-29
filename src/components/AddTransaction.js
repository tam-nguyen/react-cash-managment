import React, { Component } from 'react';

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
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label htmlFor="addtransaction">Add Transaction</label>
                  <input type="number" className="form-control" id="addtransaction" ref="addtransaction"/>
                </div>
                <div className="form-group">
                  <label htmlFor="merchant">Merchant</label>
                  <input type="text" className="form-control" id="merchant" ref="merchant"/>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" className="form-control" id="date" ref="date"/>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
        );
    }
}

export default AddTransaction;