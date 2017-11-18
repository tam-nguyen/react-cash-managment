import React, { Component } from 'react';

class Report extends Component {
    render() {
        let transactionItems;
        if (this.props.transactionInfo) {
            transactionItems = this.props.transactionInfo.map((transactionDetails, i) => {
                return (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{transactionDetails.date}</td>
                        <td>{transactionDetails.merchant}</td>
                        <td>{transactionDetails.transaction}</td>
                    </tr>
                )
            })
        }

        return (
            <div className="Report">

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Merchant</th>
                                <th>Cash Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionItems}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th>{this.props.total}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default Report;