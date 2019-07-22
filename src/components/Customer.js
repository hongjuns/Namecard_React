import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends Component {
    render() {
        const customer = this.props.customer
        console.log(customer)

        return (
             /* 
              <div>
                <CustomerProfile id={customer.id} image={customer.image} name={customer.name}/>  
                <CustomerInfo birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
              </div>
            */
            <TableRow>
                    <TableCell>{customer.id}</TableCell>
                    <TableCell><img src={customer.image} alt="profile"/></TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.birthday}</TableCell>
                    <TableCell>{customer.gender}</TableCell>
                    <TableCell>{customer.job}</TableCell>
            </TableRow>

        );
    }
}

export default Customer;