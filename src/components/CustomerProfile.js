import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class CustomerProfile extends Component {
    render() {
        return (
            <TableRow>
                <TableCell> <img src={this.props.image} alt="profile"/> </TableCell>
                <TableCell> {this.props.name}({this.props.id})</TableCell>
                
             </TableRow>
        );
    }
}

export default CustomerProfile;