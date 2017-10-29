import React, { Component } from 'react';
import ReportDetails from './ReportDetails'
class Report extends Component {
    render() {
        let transactionItems;
        let total = 0, temp=[];
        
        if (this.props.transactionInfo) {
            transactionItems = this.props.transactionInfo.map((transactionDetails, i) => {
               
                return (
                    <ReportDetails key={i} {...transactionDetails} />
                )

            })
        }
    
        this.props.transactionInfo.map((transactionValue,i) => {
            if(transactionValue.transaction){
                temp.push(parseInt(transactionValue.transaction));
                total = temp.reduce((pre,next) => {
                    return pre + next;
                })
            }

           


        })
    
 
        
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
                                <th>{total}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>



            </div>
        );
    }
}

export default Report;