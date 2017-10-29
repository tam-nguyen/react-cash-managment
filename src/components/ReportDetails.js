import React, { Component } from 'react';

class ReportDetails extends Component {

    render() {

        return (
            
                 <tr>
                    
        <td>id</td>
        <td>{this.props.date}</td>
        <td>{this.props.merchant}</td>
        <td>{this.props.transaction}</td>
      </tr>

               
            
        );
    }
}

export default ReportDetails;