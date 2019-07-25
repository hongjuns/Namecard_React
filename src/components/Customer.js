import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete'

class Customer extends Component {
    render() {
        return (
      
            <TableRow>
              
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete delid={this.props.id} stateRefresh={this.props.stateRefresh}/></TableCell>

            </TableRow>
          

        );
    }
}

export default Customer;