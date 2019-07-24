import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete'

class Customer extends Component {
    render() {
        const customer = this.props.id
       // console.log(customer)

        return (
         
             /* 
              <div>
                <CustomerProfile id={customer.id} image={customer.image} name={customer.name}/>  
                <CustomerInfo birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
              </div>
                  <TableCell><img src={customer.image} alt="profile"/></TableCell>
            */
        
            <TableRow>
              
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell><CustomerDelete/></TableCell>

            </TableRow>
          

        );
    }
}

export default Customer;